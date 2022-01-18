import React from "react";
import {Button, Heading, Container,Flex} from '@chakra-ui/react'
import { ArrowLeftIcon,WarningIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";
import { Icon } from "@chakra-ui/react"
import {Center, Text} from "@chakra-ui/layout";
const PageNotFound=()=>{
    let history = useHistory();
    return(
        <Container maxW="xl" centerContent  >
            <Center h="100vh" flexDirection="column">
                <Flex align="center">
                    <Icon as={WarningIcon} w={28} h={28} color="red.500" />
                    <Heading ml={3} color="black" mb={4} >Page not Found</Heading>
                </Flex>
                <Button mt={20}  px={25}   colorScheme="teal" onClick={history.goBack}>
                    <Icon mr={5} as={ArrowLeftIcon} w={4} h={4}  />
                    <Text>Back</Text>
                </Button>
            </Center>



        </Container>
    )
}
export default PageNotFound