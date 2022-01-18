import React from "react";

import { useSelector} from "react-redux";
import Header from "./header";
import NavigationPanel from "../navigationPanel";

const MainPage=()=>{
    const infoUser = useSelector((state) => state.auth.infoUser);
    let {email,firstName}=infoUser;
    return(
     <>
         <NavigationPanel/>
         <p>{email}</p>
         <p>{firstName}</p>
    </>

    )
}


export default MainPage