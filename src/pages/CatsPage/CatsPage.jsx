import React from 'react'
import CatsGrid from '../../components/CatsGrid/CatsGrid'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { Flex } from '@chakra-ui/layout'
import Title from '../../components/Title/Title'
import { useLoaderData } from 'react-router-dom'
import FeaturedCats from '../../components/FeaturedCats/FeaturedCats'

function CatsPage() {

    const cats = useLoaderData();

    return (
        <PageWrapper flexDir={"column"} gap={"80px"}>
            <Flex>
                <Title>Kitties!</Title>
                <FeaturedCats cats={cats}></FeaturedCats>
                <CatsGrid />
            </Flex>
        </PageWrapper>
    )
}

export default CatsPage