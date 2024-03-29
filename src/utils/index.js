import { Flex } from "@chakra-ui/react"

export const capitalizeText = (text: string) => {
    const parsedText = text.split("_").join(" ")
    const capitalizedFirstLetter = parsedText[0].toUpperCase()
    return `${capitalizedFirstLetter}${parsedText.slice(1)}`
}