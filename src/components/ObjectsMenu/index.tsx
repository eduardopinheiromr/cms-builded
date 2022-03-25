import { Flex } from "@chakra-ui/react";
import React from "react";
import { useObjectsStore } from "src/stores/objectsStore";

export default function ObjectsMenu() {
  const { objects } = useObjectsStore();
  console.log(objects);
  return (
    <Flex direction="column">
      {objects?.map(object => (
        <Flex key={object.id}>{object.title}</Flex>
      ))}
    </Flex>
  );
}
