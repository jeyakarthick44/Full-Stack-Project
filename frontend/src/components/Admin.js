import React from 'react'
import ProductTable from '../components/ProductTable';
import { Box, Heading, } from '@chakra-ui/react'

const Admin = () => {
    return (
        <div>
            <Box p={4}>
            <Heading textAlign={'center'} >ADMIN</Heading>
            <Box m={4}>
                <ProductTable />
            </Box>
            </Box>
        </div>
    )
}

export default Admin;
