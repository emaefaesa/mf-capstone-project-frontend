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
        <PageWrapper>
            <Flex flexDir={"column"} gap={"80px"}>
                <Title>Kitties!</Title>
                <CatsGrid cats={cats} />
            </Flex>
        </PageWrapper>
    )
}

export default CatsPage