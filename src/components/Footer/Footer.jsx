import { Flex } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"
import InstagramIcon from "../InstagramIcon/InstagramIcon"
import { COLORS } from "../../theme"
import MfIcon from "../MfIcon/MfIcon";

const Footer = () => {

    const ICONS = [
        { component: <InstagramIcon />, link: '#', id: 1 },
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
        >

            {
                ICONS.map(({ component, link, id }) => {
                    return (
                        <CustomLink to={link} cursor={'pointer'} key={id}>{component}</CustomLink>
                    )
                })
            }

        </Flex>
    )
};

export default Footer