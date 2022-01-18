import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    RadioGroup,
    Stack,
    Radio,
    Flex
} from "@chakra-ui/react"
import {useFormData} from "../../hoc/useFormData";
import {useState} from "react";
import isEmail from "validator/lib/isEmail";
const RegistrationForm=()=>{
    const [data,handleChange]=useFormData();
    const [errors, setErrors]=useState({});
    function submitForm(e){
        e.preventDefault();
        let errors = validate(data);
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            //запрос
            console.log('login',data)
        }
        console.log('errors',errors)
    }
    function validate(data) {
        const errors={};
        if(!isEmail(data.email)) errors.email='Not correct email';
        if(data.password.length<6)  errors.password='Password is short';
        if(data.confirmPassword.length!==data.password)  errors.confirmPassword='Password mismatch';
        return errors;

    }
    return(
        <form onSubmit={submitForm}>
            <FormControl mb={4} id="name" isRequired isInvalid={errors?.name}>
                <FormLabel>Name</FormLabel>
                <Input type="text" name='name' onChange={handleChange}/>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl mb={4} id="login" isRequired  isInvalid={errors?.email}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' onChange={handleChange}/>
                <FormErrorMessage>error</FormErrorMessage>
            </FormControl>
            <FormControl mb={4} id="state">
                <Flex justify={'space-between'}>
                    <FormLabel>State</FormLabel>
                    <RadioGroup name={'gender'}>
                        <Stack direction="row"  name={'gender'} onChange={handleChange}>
                            <Radio value="1">Male</Radio>
                            <Radio value="2">Female</Radio>
                        </Stack>
                    </RadioGroup>
                </Flex>
            </FormControl>
            <FormControl mb={4} id="password" isRequired  isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input type="password" name='password'  onChange={handleChange}/>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl mb={4} id="confirmPassword" isRequired  isInvalid={errors.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
                <Input type="password" name='confirmPassword'  onChange={handleChange}/>
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            </FormControl>
            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
            >
                Submit
            </Button>


        </form>

    )
}
export default RegistrationForm