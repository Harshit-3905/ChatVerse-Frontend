import {
  Box,
  HStack,
  VStack,
  Button,
  Text,
  Input,
  useToast,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import background from "../../assets/background.jpg";
import { useNavigate } from "react-router-dom";
import Chats from "./Chats";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const toast = useToast();
  const LogoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
    toast({
      title: "Logged Out",
      description: "You have been logged out",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box h="100vh" w="100vw" backgroundImage={background} p={3}>
      <HStack w="100%" h="100%">
        <Box w="30%" h="100%" backgroundColor="purple.400" rounded="xl">
          <Chats />
        </Box>
        <VStack w="80%" h="100%">
          <HStack
            w="100%"
            h="10%"
            backgroundColor="purple.400"
            rounded="xl"
            justifyContent="space-between"
            px={3}
          >
            <Button onClick={onOpen}>Search User</Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Search User</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Search User" />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Text fontSize="4xl">ChatVerse</Text>
            <Button colorScheme="red" onClick={LogoutHandler}>
              LogOut
            </Button>
          </HStack>
          <Box
            w="100%"
            h="90%"
            backgroundColor="purple.400"
            mt={1}
            rounded="xl"
          ></Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Home;
