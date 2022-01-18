import {
    Switch,
    Route,
} from "react-router-dom";
import React, {lazy} from "react";
const AuthPage = lazy(()=>import("../pages/auth"))
const UnauthorizationRouter=()=>{
    return(
        <Switch>
            <Route path='/' exact>
                 <AuthPage/>
            </Route>
        </Switch>
    )
}
export default UnauthorizationRouter