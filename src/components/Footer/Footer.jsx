import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import CustomLink from '../CustomLink/CustomLink';
import MfIcon from '../MfIcon/MfIcon';
import { COLORS } from '../../theme';

const Footer = () => {
    const ICONS = [
        { text: 'Made with love, even though I almost died trying. 🤍', link: '#', id: 1 }, // Cambiar el ícono de Instagram por texto
        { component: <MfIcon />, link: '#', id: 2 },
    ];

    return (
        <Flex
            width={'100%'}
            position={'absolute'}
            bottom={'0'}
            padding={'20px 80px'}
            backgroundColor={COLORS.SECONDARY}
            justifyContent={'space-between'}
            alignItems={'center'}
            fontFamily={'Poppins, sans-serif'}
        >
            {ICONS.map(({ component, text, link, id }) => {
                return (
                    <CustomLink to={link} cursor={'pointer'} key={id}>
                        {text ? <Text color="white" fontSize={"14px"} fontStyle="italic">{text}</Text> : component}
                    </CustomLink>
                );
            })}
        </Flex>
    );
};

export default Footer;
