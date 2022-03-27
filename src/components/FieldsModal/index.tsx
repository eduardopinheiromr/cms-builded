import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { useObjectsStore } from "@stores/objectsStore";

export default function FieldsModal({ isOpen, onClose }) {
  const { newObject, setNewObject } = useObjectsStore();

  const simpleFields = [
    {
      name: "Short Text Input",
      title: "",
      type: "short_text",
      content: "",
    },
    {
      name: "Long Text Input",
      title: "",
      type: "long_text",
      content: "",
    },
    {
      name: "Number Input",
      title: "",
      type: "number",
      content: "",
    },
  ];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new field to object</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid gap={2} templateColumns="repeat(3, 1fr)">
            {simpleFields.map(field => (
              <Flex
                as="button"
                rounded="md"
                px={2}
                textAlign="center"
                bg="black"
                color="white"
                align="center"
                justify="center"
                h="70px"
                key={field.name}
                onClick={() => {
                  setNewObject({
                    ...newObject,
                    fields: [...newObject.fields, field],
                  });
                  onClose();
                }}
              >
                {field.name}
              </Flex>
            ))}
          </Grid>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
