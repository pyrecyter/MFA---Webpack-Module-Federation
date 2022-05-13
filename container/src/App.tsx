import { Box, Flex, Heading, Spinner, Image, Link } from "@chakra-ui/react";
import React from "react";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <>
    <Heading color="#fff">CONTAINER</Heading>
    <Flex direction="column" justifyContent="space-around">
      <React.Suspense fallback={<Spinner size="xl" />}>
        <Box
          p="2rem"
          m="2rem"
          border="1px solid #aeaeae"
          borderRadius="1rem"
          backgroundColor="#fff"
        >
          <Heading mb="1rem">APP-1</Heading>
          <CounterAppOne />
        </Box>
      </React.Suspense>
      <React.Suspense fallback={<Spinner size="xl" />}>
        <Box
          p="2rem"
          m="2rem"
          border="1px solid #aeaeae"
          borderRadius="1rem"
          backgroundColor="#fff"
        >
          <Heading mb="1rem">APP-2</Heading>
          <CounterAppTwo initialCount={80} />
        </Box>
      </React.Suspense>
    </Flex>
    <Link
      marginTop="5rem"
      href="https://github.com/ogzhanolguncu/react-typescript-module-federation"
      target="_blank"
    >
      <Image src="./git.png" height="45px" width="45px" />
    </Link>
  </>
);

export default App;
