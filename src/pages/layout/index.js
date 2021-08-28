import Spinner from "../../services/Spinner";
import React, {Component, useEffect, useState} from "react";

import {connect, useDispatch, useSelector} from "react-redux";

import {isAuth, logout} from "../../redux/actions";

const MainPage=()=>{
    const state = useSelector((state) => state);
    console.log('state',state)
    let {auth}=state;
    let [login,setLogin]=useState(auth);
    useEffect(()=>{
        login?  dispatch(logout()):dispatch(isAuth())
    },[login])
    const dispatch = useDispatch();

   let {title}=state.infoUser;
    return(
     <>
         <p>{title}</p>
         <button onClick={()=>setLogin(!login)}>{auth?'logout':'login'}</button>

    </>

    )
}


export default MainPage