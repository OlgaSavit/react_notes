import {
    ADD_TASK,
    DELETE_TASK,
    DRAGGABLE_TASKS,
    EDIT_TASK,
    HIDE_MODAL_TASK, SAVE_TIME,
    SELECT_TASK,
    SHOW_MODAL_TASK
} from "../actionsType";

const initialState={
    tasks:{
        'task-1':{
            id:'task-1',
            content:'content 1',
            title:'do homework',
            status:'column-1',
            time:7200
        },
        'task-2':{
            id:'task-2',
            content:'content 2',
            title:'do homework2',
            status:'column-1',
            time:360
        },
        'task-3':{
            id:'task-3',
            content:'content 3',
            title:'do homework3',
            status:'column-1',
            time:60
        },
        'task-4':{
            id:'task-4',
            content:'content 4',
            title:'do homework4',
            status:'column-1',
            time:null
        }
    },
    columns:{
        'column-1':{
            id:'column-1',
            title:"To do",
            color:'#90CDF4',
            taskIds:['task-1','task-2',"task-3","task-4"]
        },
        'column-2':{
            id:'column-2',
            color:'#FAF089',
            title:"In progress",
            taskIds:[]
        },
        'column-3':{
            id:'column-3',
            title:"Done",
            color:'#9AE6B4',
            taskIds:[]
        }
    },
    columnOrder:['column-1','column-2','column-3'],
    selectTask:null,
    showModal:false
}
const reducer=(state=initialState,action)=>{

    switch (action.type){
        case DRAGGABLE_TASKS:{
            return {...state,...action.payload}
        }
        case ADD_TASK:{
            console.log('action.payload',action.payload)
            let status=action.payload.status?action.payload.status:'column-1';
            let tasks={...state.tasks,[action.payload.id]:action.payload};
            let temp= state.columns[status].taskIds;
            let addCol=[...temp,action.payload.id];
            let columns={...state.columns,[status]: {...state.columns[status],taskIds:addCol}}
             return {...state,tasks,columns}
        }
        case SELECT_TASK:{
            return {...state,selectTask:action.payload}
        }
        case SHOW_MODAL_TASK:{
            return {...state,showModal:true}
        }
        case HIDE_MODAL_TASK:{
            return {...state,showModal:false}
        }
        case EDIT_TASK:{
            const columnOrder=[...state.columnOrder];
            const columns={...state.columns};
            let newCol={};
            columnOrder.map((item)=>{
                let arr=columns[item].taskIds;
                let ids=arr.filter(item=>item!==action.payload.id);
                newCol={...newCol,[item]:{...columns[item],taskIds:ids}}
            })
            newCol[action.payload.status].taskIds.push(action.payload.id)
            let newTask = action.payload;
            let temp = {...state.tasks};
            temp[newTask.id]=newTask;
            return {...state,tasks: temp,columns: newCol}
        }
        case DELETE_TASK:{
            const columnOrder=[...state.columnOrder];
            const columns={...state.columns};
            let newCol={};
                columnOrder.map((item)=>{
                let arr=columns[item].taskIds;
                let ids=arr.filter(item=>item!==action.payload.id);
                newCol={...newCol,[item]:{...columns[item],taskIds:ids}}
            })
            const temp= {...state.tasks};
            delete temp[action.payload.id]
            return {...state,columns:newCol,tasks: temp}
        }
        case SAVE_TIME:{
            let allTasks={...state.tasks}
            let task= {...state.tasks[action.payload.task.id],time:action.payload.time};
            let newTasks={...allTasks,[action.payload.task.id]:task}
            return {...state,tasks:newTasks}
        }
        default: return  state
    }
}
export default  reducer
