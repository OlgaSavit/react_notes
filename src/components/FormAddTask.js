import {Button, Flex, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {FullSpinner} from "../services/Spinner";
import {useEffect, useState} from "react";
import {addTask, draggableTasks, editTask, hideModalTask} from "../redux/actions/tasks";
import {useDispatch, useSelector} from "react-redux";
import {generate as id} from "shortid"
import styled from "styled-components";
import {CloseIcon} from "@chakra-ui/icons";
import {Select} from "@chakra-ui/select";
import {HStack} from "@chakra-ui/layout";
import {PinInput, PinInputField} from "@chakra-ui/pin-input";

const Modal=styled.div`
   position:absolute;
   width:350px;
   padding:20px;
   background:white;
   top: 50%;  
   left: 50%; 
   transform: translate(-50%, -50%);
   border: 1px solid lightgray;
   border-radius:5px;
   
`;
const BtnClose=styled.button`
   position:absolute;
   top:0; 
   right:20px;
   top:10px;
   padding:5px;
   z-index:2;
`;

const FormAddTask=()=>{
    const initialData={
        id:id(),
        title:'',
        content:'',
        status:'',
        date: new Date().getTime()
    }
    const tasksState = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [loading,setLoading]=useState(false);
    const task = useSelector((state) => state.tasks.selectTask);
    const [data,setData]=useState(initialData);
    const getAllStatus=()=>{
       return  tasksState.columnOrder.map((columnId)=>{
            const column=tasksState.columns[columnId];
            return <option key={column.id} value={column.id}>{column.title}</option>
        })
    }
    function handleChange({target}){
        const {name,value}=target;
        setData({...data,[name]:value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        task ? dispatch(editTask({...data,date:new Date().getTime()})):dispatch(addTask(data));
        closeModal();
    }
    useEffect(()=>{
       task ? setData(task):setData(initialData)
    },[task])
    const closeModal=()=>{
        dispatch(hideModalTask())
    }
    return(
        <Modal>
            <BtnClose onClick={closeModal}>
                <CloseIcon w={3} h={3} color="red.500"/>
            </BtnClose>
            <form style={{position:'relative'}} onSubmit={(e)=>{submitForm(e)}}>
                <FormControl mb={4} isRequired id="title" >
                    <FormLabel htmlFor="title">title</FormLabel>
                    <Input type="text" name='title' value={data?.title}  onChange={handleChange}/>
                </FormControl>
                <FormControl mb={4}  id="content" >
                    <FormLabel htmlFor="content">context</FormLabel>
                    <Input type="text" name='content'  value={data?.content}    onChange={handleChange}/>
                </FormControl>
                <FormControl mb={4}  id="status" isRequired>
                <Select name="status" value={data.status && data.status } onChange={handleChange}>
                    {
                        getAllStatus()
                    }
                </Select>
                </FormControl>
                {loading &&<FullSpinner small={true}/>}
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </Modal>


    )
}
export default FormAddTask;