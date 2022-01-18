import {useSelector} from "react-redux";
import UnauthorizationRouter from "./Unauthorization";
import Authorization from "./Authorization";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

const RouterComponent=()=>{
    const state = useSelector((state) => state);
    return(
        <>
            <Router>
                {state.auth.auth ?<Authorization/>:<UnauthorizationRouter/>}
            </Router>
        </>
    )
}
export default RouterComponent;