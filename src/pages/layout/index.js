import Spinner from "../../services/Spinner";
import React, {Component, useEffect, useState} from "react";

import {connect, useDispatch, useSelector} from "react-redux";

import {isAuth, logout} from "../../redux/actions";
import {Button} from "../../style/theme";
import {LogoutButton} from "./style";
import Header from "./header";

const MainPage=()=>{
    const state = useSelector((state) => state);
    console.log('state',state)
    const dispatch = useDispatch();
   let {email,firstName}=state.infoUser;
    return(
     <>
         <Header/>
         <p>{email}</p>
         <p>{firstName}</p>

    </>

    )
}


export default MainPage