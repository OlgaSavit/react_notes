import {HeaderContainer, LogoutButton} from "./style";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isAuth, logout, changeTheme} from "../../redux/actions/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import {Box} from "@chakra-ui/layout";
const Header =()=>{

    const state = useSelector((state) => state);
    console.log('state',state)
    let {auth,theme}=state;
    let [login,setLogin]=useState();
    useEffect(()=>{
        login?  dispatch(logout()):dispatch(isAuth())
    },[login])
    const dispatch = useDispatch();
    return<HeaderContainer>
        <h1>Notes</h1>
        <Box bg="tomato" w="100%" p={4} color="white">
            <button onClick={()=>{dispatch(changeTheme(theme==='light'?'black':'light'))}}>
                {
                    theme==='light'?  <FontAwesomeIcon icon={faMoon} size='lg' color='white'/>: <FontAwesomeIcon icon={faSun} size='lg' color='yellow'/>
                }

            </button>
            <button onClick={()=>setLogin(!login)}>{auth?'logout':'login'}</button>
        </Box>
    </HeaderContainer>
}
export default Header;