import {
  Input,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const showClick = () => setShow(!show);

  return (
    <VStack p={2}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          variant="outline"
          borderColor="black"
          _placeholder={{ opacity: 1, color: "gray.700" }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            variant="outline"
            borderColor="black"
            _placeholder={{ opacity: 1, color: "gray.700" }}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={showClick}
              variant="outline"
              colorScheme="black"
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button w="100%" rounded="xl" mt={5} colorScheme="green">
        Login
      </Button>
      <Button w="100%" rounded="xl" colorScheme="red">
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
