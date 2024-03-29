import React from 'react'
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'
import CustomForm from '../../components/CustomForm/CustomForm'





const SignupPage = () => {

    const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    const onChange = () => { }
    const onSubmit = () => { }

    return (

        <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
            <CustomForm
                marginBottom={"80px"}
                title={"Signup"}
                subtitle={"Let's start cooking!"}
                onChange={onChange}
                onSubmit={onSubmit}
                options={["username", "email", "pasword"]}

            />
        </FormPageLayout>)


}



export default SignupPage