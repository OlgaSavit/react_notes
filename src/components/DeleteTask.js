import {CloseIcon} from "@chakra-ui/icons";
import styled from "styled-components";
import {Button} from "@chakra-ui/react";
import {deleteTask} from "../redux/actions/tasks";
import {useDispatch} from "react-redux";
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
const Flex=styled.div`
    display:flex;
    justify-content:space-between;
`;
const Title=styled.h3`
    text-align:center;
    fontSize:24px;
    font-weight:600;
    
`;
const ModalDeleteTask=({task,setShowModal})=>{
    const dispatch = useDispatch();
    const closeModal=()=>{
        setShowModal(false)
    }
    return(
        <Modal>
            <Title>Remove {task.title} ?</Title>
            <Flex>
                <Button
                    mt={4}
                    colorScheme="teal"
                    onClick={()=> {
                        dispatch(deleteTask(task))
                        closeModal()
                    }}
                >
                    OK
                </Button>
                <Button
                    mt={4}
                    colorScheme="teal"
                    onClick={closeModal}
                >
                    Cancel
                </Button>
            </Flex>
        </Modal>
    )
}
export default ModalDeleteTask;