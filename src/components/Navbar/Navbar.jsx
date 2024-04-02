import { Text, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import CustomLink from '../CustomLink/CustomLink';
import AuthLink from '../AuthLink/AuthLink';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const NAVIGATION_LINK = [
        { link: '/cats', text: 'Cats' },
        { link: '/cats/create', text: 'Create' }
    ];

    const location = useLocation();

    return (
        <Flex
            padding={'34px 80px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bg={'#232323'}
            color={'white'}
            fontFamily={'Poppins, sans-serif'}
        >
            <CustomLink to='/' textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Text fontSize={'36px'} fontWeight={'700'}>
                    <span className="material-symbols-outlined">
                        pets
                    </span> Cadds
                </Text>
            </CustomLink>


            <Flex gap={'33px'}>
                {NAVIGATION_LINK.map(({ link, text }) => {
                    const isActiveLink = location.pathname === link;
                    return (
                        <CustomLink
                            to={link}
                            key={text}

                            fontWeight={isActiveLink ? 'bold' : 'normal'}
                            color={isActiveLink ? 'turquoise' : 'none'}
                            _hover={{ color: 'turquoise' }}
                        >
                            <Text fontSize={'20px'}>{text}</Text>
                        </CustomLink>
                    );
                })}
            </Flex>

            <Flex gap={'20px'}>
                {user ? (
                    <>
                        <Button
                            as={Link}
                            to={'/profile'}
                            variant={'solid'}
                            color={'white'}
                            border={'1px solid turquoise'}
                            borderRadius={'50px'}
                            _hover={{ bg: 'cyan' }}
                            fontSize={'20px'}

                        >
                            Profile
                        </Button>
                        <AuthLink onClick={logout}>Logout</AuthLink>
                    </>
                ) : (
                    <>
                        <Button
                            as={Link}
                            to={'/login'}
                            variant={'link'} // Utilizamos el variant 'link'
                            color={'turquoise'} // Establecemos el color del texto
                            border={'1px solid turquoise'}
                            borderRadius={'50px'}
                            _hover={{ bg: 'cyan', color: 'white' }}
                            padding={'10px,'}
                        >
                            Login
                        </Button>
                        <Button
                            as={Link}
                            to={'/signup'}
                            variant={'solid'}
                            bg={'turquoise'}
                            color={'white'}
                            borderRadius={'50px'}
                            _hover={{ bg: 'cyan' }}
                        >
                            Signup
                        </Button>
                    </>
                )}
            </Flex>




        </Flex>
    );
};

export default Navbar;
