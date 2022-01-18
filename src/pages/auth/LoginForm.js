import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
} from "@chakra-ui/react"
import {useState} from "react";
import {useFormData} from "../../hoc/useFormData";
import isEmail from "validator/lib/isEmail";
import {isAuth} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {FullSpinner} from "../../services/Spinner";


const LoginForm=()=>{
    const dispatch = useDispatch();
    const [data,handleChange]=useFormData();
    const [errors,setErrors]=useState({});
    const [loading,setLoading]=useState(false);
    const isErrorAuth = useSelector((state) => state.auth.isErrorAuth);
    function submitForm(e){
        e.preventDefault();
       let errors = validate(data);
       setErrors(errors)
        if (Object.keys(errors).length === 0) {
            //запрос
            setLoading(true)
            dispatch(isAuth(data)).then().finally(()=>{
                setLoading(false);
            })
        }
    }
    function validate(data){
       const errors={};
       if(!isEmail(data.email)) errors.email='Not correct email';
       if(data.password.length<6)  errors.password='Password is short';
       return errors;
    }
    return(
            <form onSubmit={(e)=>{submitForm(e)}}>
                <FormControl  mb={4} id="login" isRequired isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="email" name="email" id='email' onChange={handleChange}/>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl mb={4} id="password" isRequired  isInvalid={errors.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input type="password" name='password'  onChange={handleChange}/>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {loading&&<FullSpinner small={true}/>}
                {/*{isErrorAuth&&<p>{isErrorAuth}</p>}*/}
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Login
                </Button>


            </form>

    )
}
export default LoginForm