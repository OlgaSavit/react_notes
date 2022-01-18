import React from 'react'
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";
import Task from './Task';

const Container=styled.div`
    border:1px solid lightgray;
    border-radius:2px;
    width:350px;
    margin:10px;
    
     display:flex;
     flex-direction:column;
`;
const Title=styled.h3`
    padding:8px;
    background-color: ${props=>props.color};
`;
const TaskList=styled.div`
    padding:8px;
    transition: background-color 0.2s ease;
    background-color: ${props=>props.isGraggingOver?'lightblue':'white'};
     flex-grow:1;
     min-height:100px;
`;
const Column=({title,tasks,column})=>{
    return <Container>
        <Title color={column.color}>{title}</Title>
        <Droppable droppableId={column.id}>
            {(provided,snapshot)=>(
                <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isGraggingOver={snapshot.isDraggingOver}
                >
                    {tasks?.map((task,index)=>(
                        <Task key={task?.id} task={task} index={index}/>
                        ))}
                    {provided.placeholder}
                </TaskList>
            )}

        </Droppable>

    </Container>
}
export default Column