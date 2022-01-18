
import {
    ADD_TASK,
    DELETE_TASK,
    DRAGGABLE_TASKS,
    EDIT_TASK,
    HIDE_MODAL_TASK, SAVE_TIME,
    SELECT_TASK,
    SHOW_MODAL_TASK
} from "../actionsType";

export const draggableTasks=(data)=>dispatch=>{
    return  dispatch({
        type:DRAGGABLE_TASKS,
        payload: data
    })

}

export const addTask=(data)=>dispatch=>{
    return  dispatch({
        type:ADD_TASK,
        payload: data
    })
}
export const editTask=(data)=>dispatch=>{
    return  dispatch({
        type:EDIT_TASK,
        payload: data
    })
}
export const selectTask=(task)=>dispatch=>{
    return  dispatch({
        type:SELECT_TASK,
        payload: task
    })
}
export const showModalTask=()=>dispatch=>{
    return  dispatch({
        type:SHOW_MODAL_TASK
    })
}
export const hideModalTask=()=>dispatch=>{
    return  dispatch({
        type:HIDE_MODAL_TASK
    })
}

export const deleteTask=(task)=>dispatch=>{
    return  dispatch({
        type:DELETE_TASK,
        payload:task
    })
}
export const saveTimeTask=(time,task)=>dispatch=>{
    return  dispatch({
        type:SAVE_TIME,
        payload: {time,task}
    })
}