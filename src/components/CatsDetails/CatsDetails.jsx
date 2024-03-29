import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import EditIcon from '../EditIcon/EditIcon'
import { Box } from '@chakra-ui/react'

const CatsDetails = ({ onOpen, catsDetails }) => {
    return (
        <Flex position={"relative"} marginBottom={"80px"} w={"50%"} justify={"center"}>
            <Flex
                position={"relative"}
                gap={"20px"}
                minW={"550px"}
                maxHeight={"800px"}
                padding={"84px 47px"}
                border={"1px solid rgba(0,0,0,0.2)"}
                borderRadius={"20px"}
                flexDir={"column"}
            >
                {catsDetails.map(({ name, content }) => {
                    return (
                        <Text key={name}>
                            <Text fontWeight={"bold"}>{name}:</Text>
                            <Text as={"span"}>{content}</Text>
                        </Text>
                    )
                })}
                <Box position={"absolute"} top={"25px"} right={"25px"} cursor={"pointer"}>
                    <EditIcon />
                </Box>
            </Flex>
        </Flex>
    )
}

export default CatsDetails
