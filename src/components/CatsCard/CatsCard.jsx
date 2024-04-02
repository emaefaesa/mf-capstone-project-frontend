import React, { useState } from "react"
import { Flex, GridItem, Text } from "@chakra-ui/react"
// import LikeIcon from "../LikeIcon/LikeIcon"

const CatsCard = ({ image, name, handleLike }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem
      cursor={"pointer"}
      borderRadius={"10px"}
      w={"100%"}
      h={["400px", "500px", "550px"]}
      backgroundImage={image}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      position={"relative"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.1)"}
    >
      {/* <LikeIcon handleLike={handleLike} /> */}
      {isHovered && (
        <Flex
          width={"100%"}
          height={"100%"}
          position="absolute"
          top="0"
          left="0"
          justify={"center"}
          alignItems={"center"}
          backgroundColor={"rgba(69, 234, 225, 0.2)"}
          borderRadius={"10px"}
        >
          <Text fontSize={"45px"} color={'white'} fontWeight={"bold"} fontFamily={'Poppins, sans-serif'} textAlign={"center"}>
            {name}
          </Text>
        </Flex>
      )}
    </GridItem>
  )
}

export default CatsCard
