import {Button} from "../../style/theme";
import {isAuth} from "../../redux/actions";
import {useDispatch,useSelector} from "react-redux";

const RegistrationPage=()=>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let {isErrorAuth}=state;
    return(
        <div>
            <p>Registration</p>
            {isErrorAuth&&<p>Authorization Error</p>}
            <Button onClick={()=>{dispatch(isAuth())}}>Login</Button>
        </div>
    )
}
export default RegistrationPage;