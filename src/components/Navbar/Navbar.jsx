const Navbar = () => {
    return (
        <Flex
            padding={"34px 80px"}
            jutifyContent={"space-between"}
            alignItems={"center"}
        >
            <Link to='/'>
                <Text fontSize={'36px'} fontWeight={'700'}>
                    Rapaws
                </Text>
            </Link>
        </Flex>
    );
};

export default Navbar; 