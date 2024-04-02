import React from 'react'
import CatsGrid from '../../components/CatsGrid/CatsGrid'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { Flex } from '@chakra-ui/layout'
import Title from '../../components/Title/Title'
import { useLoaderData } from 'react-router-dom'
import FeaturedCats from '../../components/FeaturedCats/FeaturedCats'
import { Text } from '@chakra-ui/layout'

function CatsPage() {
    const cats = useLoaderData();

    return (
        <div style={{ position: "relative" }}>
            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.5)",
                    zIndex: "-1",
                }}
            >
                <source src="https://v1.cdnpk.net/videvo_files/video/free/video0543/large_preview/_import_631d7b0e28e4c8.23299127.mp4" type="video/mp4" />
            </video>

            {/* Contenido de la página */}
            <PageWrapper>
                <Flex flexDir={"column"} gap={"20px"} alignItems="center" marginBottom="40px" fontFamily={'Poppins, sans-serif'}>
                    <Title color={'white'} >Kitties!</Title>
                    <Text color={'white'} textAlign="center">Here you can find all the kittens that need a family</Text>
                </Flex>
                <CatsGrid cats={cats} />
            </PageWrapper>



        </div>
    )
}

export default CatsPage
