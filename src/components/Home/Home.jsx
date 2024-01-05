import { Box, HStack, VStack } from "@chakra-ui/react";
import background from "../../assets/background.jpg";

const Home = () => {
  return (
    <Box h="100vh" w="100vw" backgroundImage={background}>
      <HStack>
        <Box w="20%"></Box>
        <VStack w="80%"></VStack>
      </HStack>
    </Box>
  );
};

export default Home;
