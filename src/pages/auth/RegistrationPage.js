import {Button} from "../../style/theme";
import {isAuth} from "../../redux/actions";
import {useDispatch} from "react-redux";

const RegistrationPage=()=>{
    const dispatch = useDispatch();
    return(
        <div>
            <p>Registration</p>
            <Button onClick={()=>{dispatch(isAuth())}}>Login</Button>
        </div>
    )
}
export default RegistrationPage;