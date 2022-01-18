import DND_Component from "../../dnd";
import styled from "styled-components";
import {Button} from "@chakra-ui/react";
import FormAddTask from "../../components/FormAddTask";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTask, selectTask, showModalTask} from "../../redux/actions/tasks";
import ModalDeleteTask from "../../components/DeleteTask";
import Timer from "../../components/Timer";
const Title=styled.h2`
   padding:15px; 
   display:flex;
   text-align:center;
   justify-content: center;
   color:#1A202C;
   font-size:32px;
   font-weight:600;
`;
const WrapperTask=styled.div`
   background:#F0FFF4;
   height:100vh;
   padding:0 15px;
`;
const TaskPage=()=>{
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.tasks.showModal);

    return(
        <WrapperTask>
            <Title>My Task List</Title>
            <DND_Component/>
            <Button onClick={()=> {
                dispatch(selectTask(null))
                dispatch(showModalTask())
                // setShowModal(true)
            }}
                mt={4}
                colorScheme="teal"
            >
                AddTask
            </Button>
            {modal && <FormAddTask/>}
        </WrapperTask>
    )
}
export default TaskPage