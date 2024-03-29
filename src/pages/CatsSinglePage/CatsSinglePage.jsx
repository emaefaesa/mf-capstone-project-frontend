import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import catsService from '../../services/cats.service'
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'
import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import CatsDetails from '../../components/CatsDetails/CatsDetails'

const CatsSinglePage = () => {

    const { id } = useParams()
    const [cat, setCat] = useState({
        name: "",
        location: { coordinates: [] },
        image: "",
    })

    const CAT_DETAILS = [
        { name: "Name", content: cat.name },
        { name: "Location", content: cat.location.coordinates.join("") },
        { name: "Image", content: cat.image },
    ]


    const getSingleCat = async () => {
        try {
            const singleCat = await catsService.getOneCat(id)
            setCat(singleCat)
        } catch (error) {
            console.log("Error =>", error)
        }
    }


    useEffect(() => {
        getSingleCat()
    }, [])

    return (

        <FormPageLayout backgroundImage={cat.image}>
            <CatsDetails catsDetails={CAT_DETAILS} />
        </FormPageLayout>

    )

}


export default CatsSinglePage

