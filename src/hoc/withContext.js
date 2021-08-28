import {Consumer} from "../services/Context";

function withContext(View){

    return(props)=>{
        return  <Consumer>
            {
                (lang)=>  <View {...props} lang={lang}/>
            }
        </Consumer>
    }

}
export {withContext}