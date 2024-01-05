import Login from "./Login";
import SignUp from "./SignUp";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import image from "./image.jpeg";
import background from "../../assets/background.jpg";

const Auth = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage={background}
      direction="column"
      gap={5}
    >
      <Box
        backgroundColor="purple.300"
        rounded="2xl"
        w="75%"
        p={2}
        textAlign="center"
      >
        <Text fontSize="3xl">ChatVerse</Text>
      </Box>
      <Flex
        justifyContent="center"
        p={10}
        gap={10}
        backgroundColor="purple.300"
        rounded="2xl"
        w="75%"
      >
        <Image src={image} h="400px" w="500px" rounded="2xl"></Image>
        <Box w="500px">
          <Tabs variant="enclosed" w="95%">
            <TabList size={10}>
              <Tab
                _selected={{ color: "white", bg: "blue.400" }}
                w="50%"
                rounded="2xl"
                color="black"
                border={3}
              >
                Login
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "blue.400" }}
                w="50%"
                rounded="2xl"
                color="black"
              >
                SignUp
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Auth;
