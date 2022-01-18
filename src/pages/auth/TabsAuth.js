import { TabList, TabPanel, TabPanels, Tabs,Flex} from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import {CustomTab} from "../../style/theme";
import RegistrationForm from "./RegistratIonForm";

const TabsAuth=()=>{
    return(
        <Flex  maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={'auto'} mt={4}>
            <Tabs variant="soft-rounded" colorScheme="cyan" style={{width:'100%'}} >
                <TabList>
                    <CustomTab >Login</CustomTab>
                    <CustomTab>Registration</CustomTab>
                </TabList>
                <TabPanels >
                    <TabPanel >
                        <LoginForm/>
                    </TabPanel>
                    <TabPanel>
                        <RegistrationForm/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>

    )
}
export default TabsAuth