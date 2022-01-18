import {useDispatch, useSelector} from "react-redux";
import Column from "./Column";
import {DragDropContext} from "react-beautiful-dnd";
import {draggableTasks} from "../redux/actions/tasks";
import styled from 'styled-components'

const Container=styled.div`
   display:flex;
`

const DND_Component=()=>{
    const dispatch = useDispatch();
    const tasksState = useSelector((state) => state.tasks);
    const onDragStart=()=>{
        document.body.style.color='blue';
        document.body.style.transition='background-color: 0.2s ease';
    }
    const onDragUpdate=update=>{
        const {destination}=update;
        const opacity=destination?destination.index/Object.keys(tasksState.tasks).length:0;
        document.body.style.backgroundColor=`rgba(153,141,217, ${opacity})`;
    }
    const onDragEnd=(result)=>{
        document.body.style.color='inherit';
        const {destination, source, draggableId}=result;
        if(!destination){
            return ;
        }
        if( destination.draggableId===source.droppableId && destination.index===source.index){
            return ;
        }
        const start=tasksState.columns[source.droppableId];
        const finish=tasksState.columns[destination.droppableId];

        if(start===finish){
            const newTasksIds=Array.from(start.taskIds);
            newTasksIds.splice(source.index,1);
            newTasksIds.splice(destination.index,0,draggableId);
            const newColumn={
                ...start,
                taskIds:newTasksIds
            }
            const newState={
                ...tasksState,
                columns:{
                    ...tasksState.columns,
                    [newColumn.id]:newColumn
                }
            }
            dispatch(draggableTasks(newState))
            return ;
        }

        // from one list to another
        const startTaskIds=Array.from(start.taskIds);
        startTaskIds.splice(source.index,1);
        const newStart={
            ...start,
            taskIds:startTaskIds
        };

        const finishTaskIds=Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index,0,draggableId);
        const newFinish={
            ...finish,
            taskIds:finishTaskIds
        }
        const newStatusTask={...tasksState.tasks[draggableId],status:finish.id}
        const newListTasks={...tasksState.tasks,[draggableId]:newStatusTask}
        const newState={
            ...tasksState,
            tasks: newListTasks,
            columns:{
                ...tasksState.columns,
                [newStart.id]:newStart,
                [newFinish.id]:newFinish,
            }
        }
        dispatch(draggableTasks(newState))
        return ;

    }
    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {tasksState.columnOrder.map((columnId)=>{
                    const column=tasksState.columns[columnId];
                    const tasks=column.taskIds?.map(taskId=>tasksState.tasks[taskId]);
                    return <Column key={column.id} column={column} tasks={tasks} title={column.title}/>
                })}
            </Container>
        </DragDropContext>
    )
}
export default DND_Component