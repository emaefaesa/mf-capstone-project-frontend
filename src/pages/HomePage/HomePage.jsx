import { Flex } from '@chakra-ui/layout'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import React from 'react';
import FeaturedCats from '../../components/FeaturedCats/FeaturedCats'


function HomePage() {
    return (
        <PageWrapper>
            <Flex>
                <FeaturedCats />
            </Flex>
        </PageWrapper>
    )
}

export default HomePage