import { Box, Heading } from "@chakra-ui/react";
import { useObjectsStore } from "@stores/objectsStore";
import Input from "@components/Input";
import slugify from "slugify";

export default function TitleSlugSection() {
  const { newObject, setNewObject } = useObjectsStore();
  return (
    <Box p={8} w={500}>
      <Heading mb={4}>New object</Heading>

      <Input
        label="Title"
        placeholder="Your object title"
        value={newObject.title}
        onChange={e => setNewObject({ title: e.target.value ?? "" })}
      />
      <Input
        label="Slug"
        placeholder="your-object-title"
        value={slugify(newObject.title, { lower: true })}
      />
    </Box>
  );
}
