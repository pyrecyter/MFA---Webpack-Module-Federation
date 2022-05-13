import { Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        <strong>APP 1</strong>
      </Text>
      <Text>Count : {count} </Text>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </Flex>
  );
};

export default Counter;
