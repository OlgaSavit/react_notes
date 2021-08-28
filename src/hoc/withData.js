import Spinner from "../services/Spinner";
import {Component} from "react";

function withData (View){
    return class extends Component{
        state={
            load:true
        }
        render(){
            return <>
                {    this.state.load?<Spinner/>:<View {...this.props} />}
                <button onClick={()=>{this.setState({load:false})}}>load</button>
            </>
        }

    }
}
function withChildFunction(Wrapped,fn){
    return (props)=>{
        return (<Wrapped {...props}>
            {fn}
        </Wrapped>)
    }

}
export {withData,withChildFunction}