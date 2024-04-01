import React, { useEffect, useState } from "react"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import CustomForm from "../../components/CustomForm/CustomForm";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.services";

const SignupPage = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const toast = useToast()
    const navigate = useNavigate()

    const BACKGROUND_IMAGE =
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    const onChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.signup(userData)
            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            navigate("/login")
        } catch (error) {
            console.log("Error ==>", error)
        }
    }

    return (
        <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
            <CustomForm
                marginBottom={"80px"}
                title={"Signup"}
                subtitle={"Let’s start cooking!:"}
                onChange={onChange}
                onSubmit={onSubmit}
                options={["username", "email", "password"]}
            />
        </FormPageLayout>
    )
}




export default SignupPage



