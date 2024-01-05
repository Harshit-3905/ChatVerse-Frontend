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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const RegisterHandler = () => {
    setIsLoading(true);
    if (name === "" || email === "" || password === "") {
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
      .post("http://localhost:3000/api/user/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        navigate("/home");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
        return;
      });
  };
  return (
    <VStack p={2}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outline"
          borderColor="black"
          placeholder="Enter Name"
          _placeholder={{ opacity: 1, color: "gray.700" }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outline"
          borderColor="black"
          placeholder="Enter Email"
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
        colorScheme="red"
        onClick={RegisterHandler}
        isLoading={isLoading}
      >
        SignUp
      </Button>
    </VStack>
  );
};

export default SignUp;
