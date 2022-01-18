import {Heading } from '@chakra-ui/react'
import TabsAuth from "./TabsAuth";

const AuthPage=()=>{
    return(
        <div>
            <Heading mt={6}  size="lg" textAlign="center" color="gray.700">
                Wellcome for Notation
            </Heading>
            <TabsAuth/>
        </div>
    )
}
export default AuthPage;