import { extendTheme } from "@chakra-ui/react"

export const COLORS = {
    SECONDARY: "#232323",
}

export const theme = extendTheme({
    styles: {
        global: {
            body: { overscrollBehavior: "none" },
        },
    },
})