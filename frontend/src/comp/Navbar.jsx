import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdOutlineWbSunny } from 'react-icons/md';
import {
  Container,
  Flex,
  Box,
  Button,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import UserAvatar from '../components/ui/UserAvatar';
import CartIcon from '../components/ui/CartIcon'; // 👈 Import this
import Menu from '../components/ui/Menu';
import Video from '../components/ui/Video';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4} bg="grey" color="white" position="relative">
      <Flex align="center" justify="space-between" position="relative">

        <Box w="100px" />

        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          fontFamily="Montserrat"
          fontSize="2xl"
          fontWeight="bold"
        >
          ZA AUTOS
        </Box>

        <HStack spacing={4}>
          <Button onClick={toggleColorMode} size="sm">
            <Box
              bg={colorMode === "light" ? "white.200" : "white.300"}
              borderRadius="full"
            >
              {colorMode === "light" ? <FaMoon color="white" /> : <MdOutlineWbSunny color="white" />}
            </Box>
          </Button>

          <Button>
            <CartIcon />
          </Button>

          <Button>
            <UserAvatar />
          </Button>

          <Video />

          <Box left="0%" position="absolute">
            <Menu />
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
