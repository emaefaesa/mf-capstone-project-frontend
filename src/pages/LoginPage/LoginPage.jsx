import React from 'react'
import { Flex, Text } from "@chakra-ui/layout"
import CustomForm from '../../components/CustomForm/CustomForm'
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'


const LoginPage = () => {
    const BACKGROUND_IMAGE = 'https://plus.unsplash.com/premium_photo-1666240745314-3292b3d54ba4?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    const onChange = () => { }
    const onSubmit = () => { }

    return (
        <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
            <CustomForm
                marginBottom={"80px"}
                title={"Login"}
                subtitle={"Let's start cooking!"}
                onChange={onChange}
                onSubmit={onSubmit}
                options={["username", "pasword"]}

            />
        </FormPageLayout>
    )
}





export default LoginPage