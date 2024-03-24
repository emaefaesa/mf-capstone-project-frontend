import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import CustomLink from '../CustomLink/CustomLink';
import AuthLink from '../AuthLink/AuthLink';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const NAVIGATION_LINK = [
        { link: '/', text: 'Home' },
        { link: '/cats', text: 'Cats' },
        { link: '/cats/create', text: 'Create' }
    ];

    const location = useLocation();  /* xra saber donde nos encontramos */

    return (
        <Flex
            padding={'34px 80px'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <CustomLink to='/'>

                <Text fontSize={'36px'} fontWeight={'700'}>
                    <span class="material-symbols-outlined">
                        pets
                    </span> Rapaws
                </Text>
            </CustomLink>

            <Flex gap={'33px'}>
                {NAVIGATION_LINK.map(({ link, text }) => {

                    const isActiveLink = location.pathname === link;

                    return (
                        <CustomLink to={link} key={text} fontWeight={isActiveLink ? 'bold' : 'normal'} textDecoration={isActiveLink ? 'underline' : 'none'}>
                            <Text>{text}</Text>
                        </CustomLink>
                    )
                })}
            </Flex>


            {/* LOGIN */}
            <Flex gap={'20px'}>
                <AuthLink to={'/login'}>Login</AuthLink>
                <AuthLink to={'/signup'}>Signup</AuthLink>
            </Flex>
        </Flex>
    );
};

export default Navbar; 