import { Box } from "@chakra-ui/react";
import CounterAppTwo from "./components/Counter";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP 2 on port 3002</Box>
    <Box>
      <CounterAppTwo />
    </Box>
  </Box>
);

export default App;
