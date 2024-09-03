import logo from "./logo.svg";
import "./App.css";
import { Container, Flex, Box } from "@chakra-ui/react";
import Main from "./components/main";

function App() {
  return (
    <Container maxW="Container.3xl" bg={"#f8fafd"} p={"5"} height={"100vh"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
