import {Link} from "react-router-dom";
import {Stack,Button,Box} from '@chakra-ui/react'
const NavigationPanel=()=>{
    return(
        <Stack direction="row"  align="center" px={10} py={5}>
            <Box w={'100%'} spacing={4}  border="1px" borderColor="gray.200" p={3} borderRadius={10}>
                <Link to='my_tasks'>
                    <Button colorScheme="teal" variant="outline" mr={3}>
                        Мої задачі
                    </Button>
                </Link>
                <Link to='projects'>
                    <Button colorScheme="teal" variant="outline" mr={3}>
                        Проекти
                    </Button>
                </Link>
            </Box>

        </Stack>

    )
}
export default NavigationPanel