import {HeaderContainer, LogoutButton} from "./style";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isAuth, logout, changeTheme} from "../../redux/actions";
import {Button, Image, Title, TransparentButton} from "../../style/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sun from '../../img/svg/sun.svg'
import moon from '../../img/svg/moon.svg'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
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
        <Title>Notes</Title>
        <div style={{display:'flex',alignItems:'center'}}>
            <TransparentButton onClick={()=>{dispatch(changeTheme(theme==='light'?'black':'light'))}}>
                {
                    theme==='light'?  <FontAwesomeIcon icon={faMoon} size='lg' color='white'/>: <FontAwesomeIcon icon={faSun} size='lg' color='yellow'/>
                }

            </TransparentButton>
            <LogoutButton onClick={()=>setLogin(!login)}>{auth?'logout':'login'}</LogoutButton>
        </div>
    </HeaderContainer>
}
export default Header;