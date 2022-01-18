import { useState} from "react";

const useFormData=()=>{
    const [data,setData]=useState({});
    function handleChange({target}){
        const {name,value}=target;
        setData({...data,[name]:value})
    }

    return [data,handleChange]
}
export {useFormData}