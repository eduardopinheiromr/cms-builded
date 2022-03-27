import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { useObjectsStore } from "@stores/objectsStore";

export default function TypeSelectorSection() {
  const { newObject, setNewObject } = useObjectsStore();
  return (
    <Box p={8} w={400}>
      <Heading mb={8}>Object type</Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <Flex
          as="button"
          h="100px"
          w="150px"
          justify="center"
          align="center"
          rounded="lg"
          transition=".3s"
          bg={newObject.type === "single" ? "black" : "light"}
          color={newObject.type === "single" ? "white" : "black"}
          onClick={() => setNewObject({ type: "single" })}
        >
          Single
        </Flex>
        <Flex
          as="button"
          h="100px"
          w="150px"
          justify="center"
          align="center"
          transition=".3s"
          rounded="lg"
          bg={newObject.type === "multiple" ? "black" : "light"}
          color={newObject.type === "multiple" ? "white" : "black"}
          onClick={() => setNewObject({ type: "multiple" })}
        >
          Multiple
        </Flex>
      </Grid>
    </Box>
  );
}
