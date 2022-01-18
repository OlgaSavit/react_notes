import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";
import React, {useState} from "react";
import Moment from "react-moment";
import {CloseIcon, EditIcon} from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectTask, showModalTask} from "../redux/actions/tasks";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModalDeleteTask from "../components/DeleteTask";

import {BiEdit} from "react-icons/bi";
import Timer from "../components/Timer";
const Container=styled.div`
    margin:8px;
    border:1px solid lightgray;
    border-radius:2px;
    padding:8px;
    background-color:${props=>
    props.isDragDisabled
        ? 'lightgrey':
    props.isDragging?'lightgreen':'white'};
    display:flex;
    align-items:center;
`;

const Handle=styled.div`
    width:20px;
    height:20px;
    background-color:orange;
    border-radius:4px;
    margin:8px;
`;
const Title=styled.p`
    font-size:18px;
    font-weight:600;
`;
const Text=styled.p`
    font-size:14px;
`;
const DateText=styled.p`
    font-size:12px;
    color:light-gray;
`;
const Flex=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
  
`;
const Column=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;
const FLEX_END=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;
const TransparentBtn=styled.button`
    background:transparent;
    border:0;
`;
const Task=({task,index})=>{
    const dispatch = useDispatch();
    const isDragDisabled=task?.id==='task-1';
    const editTask=(task)=>{
        dispatch(showModalTask())
        dispatch(selectTask(task))
    }
    const [showModal,setShowModal]=useState(false);
    const stopwatchOffset = new Date();
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + task.time);
    return(
        <Draggable
            draggableId={task?.id}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {(provided,snapshot)=>(
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    isDragDisabled={isDragDisabled}
                >
                    <Column>
                        <div style={{marginBottom:'20px'}}>
                            <Title>{task?.title}</Title>
                            <Text>{task?.content}</Text>
                            {task?.date && <DateText>{<Moment date={task?.date} format="DD-MM-YYYY HH:mm"/>}</DateText>}
                        </div>
                        <Flex>
                            <Flex>
                                <Timer task={task} timeC={stopwatchOffset}/>
                            </Flex>
                            <FLEX_END>
                                <TransparentBtn onClick={()=>editTask(task)}>
                                    <BiEdit size={18} style={{marginRight:'10px'}}/>
                                </TransparentBtn>
                                <TransparentBtn onClick={()=>setShowModal(true)}>
                                    <RiDeleteBin5Line  size={18} color={'red'}/>
                                </TransparentBtn>
                            </FLEX_END>
                        </Flex>
                    </Column>
                    {showModal && <ModalDeleteTask task={task} setShowModal={setShowModal}/>}
                </Container>
                )
            }

        </Draggable>

    )
}
export default Task