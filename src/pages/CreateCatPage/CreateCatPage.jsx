import React, { useState } from 'react'
import { Flex, Text } from "@chakra-ui/layout"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Input from "../../components/Input/Input"
import catsService from "../../services/cats.service"
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'
import CustomForm from '../../components/CustomForm/CustomForm'

const IMAGE = 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const OPTIONS = ['name', 'location', 'image'];

function CreateCatPage() {
    const [catData, setCatData] = useState({
        name: '',
        location: '',
        image: '',
    });

    const title = 'Create 😺';
    const subtitle = 'Upload your cat!';


    const onChange = (e) => {
        const { name, value } = e.target;
        setCatData({ ...catData, [name]: value });
    };


    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await catsService.createCat(catData);
            setCatData({
                name: '',
                location: '',
                image: '',
            })
        } catch (err) {
            console.error(err);
        }


    };

    return (
        <FormPageLayout backgroundImage={IMAGE}>
            <Flex minW={"400px"} maxW={"400px"} flexDir={"column"}>
                <Text textAlign={"center"} fontSize={"48px"} fontWeight={"bold"}>
                    {title}
                </Text>
                {subtitle && (
                    <Text textAlign={"center"} fontSize={"24px"}>
                        {subtitle}
                    </Text>
                )}
                <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
                    <Flex flexDir={"column"} gap={"30px"}>
                        {OPTIONS.map((option) => {
                            return (
                                <Input
                                    type={option === "password" ? "password" : "text"}
                                    name={option}
                                    onChange={onChange}
                                    key={option}
                                    placeholder={/* capitalizeText */(option)} // CAPITALIZED!!! "name" => "Name"
                                    value={catData[option]}
                                />
                            )
                        })}
                    </Flex>
                    <SubmitButton />
                </form>
            </Flex>
        </FormPageLayout>
    )
}

export default CreateCatPage