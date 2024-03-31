import { Flex } from "@chakra-ui/react"
import React from "react"
import Title from "../Title/Title"
import CatsGrid from "../CatsGrid/CatsGrid"

const FavoriteCats = ({ favoriteCats }) => {
    return (
        <Flex flexDir={"column"} gap={"80px"}>
            <Title fontSize="30px">These are your Favorite Cats:</Title>
            <CatsGrid cats={favoriteCats} />
        </Flex>
    )
}

export default FavoriteCats