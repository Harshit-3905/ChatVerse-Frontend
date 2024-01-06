import {
  Input,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showClick = () => setShow(!show);
  const navigate = useNavigate();
  const toast = useToast();
  const LoginHandler = () => {
    setIsLoading(true);
    if (email === "" || password === "") {
      toast({
        title: "Invalid Credentials",
        description: "Please Enter Valid Credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }
    if (!validator.isEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please Enter Valid Email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }
    axios
      .post("http://localhost:3000/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: err.response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      });
    setIsLoading(false);
    toast({
      title: "Success",
      description: "Logged In Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/home");
  };
  const GuestHandler = () => {
    setEmail("guest@example.com");
    setPassword("guest");
  };
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
      <Button
        w="100%"
        rounded="xl"
        mt={5}
        colorScheme="green"
        onClick={LoginHandler}
        isLoading={isLoading}
      >
        Login
      </Button>
      <Button w="100%" rounded="xl" colorScheme="red" onClick={GuestHandler}>
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
