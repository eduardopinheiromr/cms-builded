import { Flex } from "@chakra-ui/react";
import React from "react";
import { useObjectsStore } from "src/stores/objectsStore";
import Button from "@components/Button";

export default function ObjectsMenu() {
  const { objects } = useObjectsStore();
  console.log(objects);
  return (
    <Flex p={4} bg="light" h="100vh" direction="column" maxW={200}>
      <Button href="/objects/new">Novo objeto</Button>
      {objects?.map(object => (
        <Flex
          my={2}
          rounded="lg"
          bg="lightblue"
          h="50px"
          px={4}
          align="center"
          key={object.id}
        >
          {object.title}
        </Flex>
      ))}
    </Flex>
  );
}
