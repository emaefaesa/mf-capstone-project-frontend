import { Flex } from "@chakra-ui/react"

export const capitalizeText = (text) => {
    const parsedText = text.split("_").join(" ")
    const capitalizedFirstLetter = parsedText[0].toUpperCase()
    return `${capitalizedFirstLetter}${parsedText.slice(1)}`
}

export const getCatDetails = (
    name,
    location,
    image
) => {
    return [
        { name: "Name", content: name },
        { name: "Location: ", content: location.coordinates.join(" ") },
        { name: "Image: ", content: image },
    ]
}