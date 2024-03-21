import { Flex } from '@chakra-ui/layout'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import React from 'react'
import FeaturedRestaurants from '../../components/FeaturedRestaurants/FeaturedRestaurants'


function HomePage() {
    return (
        <PageWrapper>
            <Flex>

                <FeaturedRestaurants></FeaturedRestaurants>
            </Flex>
        </PageWrapper>
    )
}

export default HomePage