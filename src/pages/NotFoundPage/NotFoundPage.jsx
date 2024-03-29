import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import React from 'react'

const NotFoundPage = () => {
    return <Flex
        heigh={"100vh"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Text
            fontWeight={"bold"}
            fontSize={"62px"}
            gap={"12px"}
        >
            404
        </Text>
        <Text
            fontWeight={'bold'}
            fontSize={'52px'}
            gap={'12px'}>
            Oops! Page not found, sorry!😿
        </Text>
    </Flex>
}

export default NotFoundPage