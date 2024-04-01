import React from 'react'
import { Flex, Text } from "@chakra-ui/layout"
import CustomForm from '../../components/CustomForm/CustomForm'
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'
import { useContext, useState } from "react"

import { AuthContext } from '../../contexts/AuthContext'



const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const BACKGROUND_IMAGE =
        "https://plus.unsplash.com/premium_photo-1666240745314-3292b3d54ba4?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const onChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await login(userData)
    }

    return (
        <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
            <CustomForm
                marginBottom={"80px"}
                title={"Login"}
                subtitle={"Kitties"}
                onChange={onChange}
                onSubmit={onSubmit}
                options={["email", "password"]}
            />
        </FormPageLayout>
    )
}

export default LoginPage