import {Box,Tab} from '@chakra-ui/react'
function Example() {
    return <Box background={'red'} layerStyle="selected">This is a box</Box>
}
function CustomTab({children}) {
    return <Tab mr={3} _selected={{  bg: "blue.50" }} background={'#EDF2F7'} borderRadius={4} >{children}</Tab>
}
export {Example,CustomTab}