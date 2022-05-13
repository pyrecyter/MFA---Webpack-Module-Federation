import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type CounterProps = {
  initialCount?: number;
};

const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    if (props.initialCount) setCount(props.initialCount);
  }, []);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        <strong>APP 2</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState - 1)}>
        Click me
      </Button>
      <Button onClick={() => setCount(props.initialCount ?? 100)}>Reset</Button>
    </Flex>
  );
};

export default Counter;
