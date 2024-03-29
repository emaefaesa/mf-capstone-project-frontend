import { Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={"600px"} borderRadius={"10px"} padding={"60px"}>
                <ModalCloseButton top={"25px"} size={"lg"} borderRadius={"100px"} />
                <ModalBody
                    style={{ display: "flex", justifyContent: "center" }}
                    padding={0}
                >{children}
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    )
}

export default Modal