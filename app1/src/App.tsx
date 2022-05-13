import { Box } from "@chakra-ui/react";
import CounterAppOne from "./components/Counter";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP 1 on port 3001</Box>
    <Box>
      <CounterAppOne />
    </Box>
  </Box>
);

export default App;
