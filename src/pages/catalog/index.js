import Spinner from "../../services/Spinner";
import React, {Component} from "react";
import {withData} from '../../hoc/withData'

const CatalogPage=(props)=>{

    let {text}=props;
    return(
        <>
            <p>{text}</p>
        </>

    )
}

export default withData(CatalogPage)