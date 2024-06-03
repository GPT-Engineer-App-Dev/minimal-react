import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("black", "white")}>
        <Box>
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <IconButton aria-label="Toggle theme" icon={icon} onClick={toggleColorMode} />
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;