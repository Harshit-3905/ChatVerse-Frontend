import { Box, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchChats = async () => {
      const res = await axios.get("http://localhost:5000/api/chat/allchats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChats(res.data);
    };
    fetchChats();
  }, []);
  return (
    <Box h="100%" w="100%">
      <Text fontSize="4xl" textAlign="center">
        Chats
      </Text>

      <VStack>
        {chats.map((chat) => (
          <Text key={chat._id}>{chat.name}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Chats;
