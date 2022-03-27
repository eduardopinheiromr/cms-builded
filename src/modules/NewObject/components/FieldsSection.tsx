import { Box, Flex, Heading } from "@chakra-ui/react";
import { useObjectsStore } from "@stores/objectsStore";
import Button from "@components/Button";
import { selectableFields } from "@components/Fields/selectableFields";
import { useState } from "react";
import FieldsModal from "@components/FieldsModal";

export default function FieldsSection() {
  const [fieldsModal, setFieldsModal] = useState(false);

  const { newObject, setNewObject } = useObjectsStore();
  return (
    <Box p={8} w={500}>
      <Flex justify="space-between">
        <Heading mb={4}>Fields</Heading>
        <Button w="fit-content" onClick={() => setFieldsModal(true)}>
          New field
        </Button>
      </Flex>

      {newObject.fields.map((field, key) => (
        <Box key={key}>{selectableFields[field.type]({ title: "" })}</Box>
      ))}
      <FieldsModal isOpen={fieldsModal} onClose={() => setFieldsModal(false)} />
    </Box>
  );
}
