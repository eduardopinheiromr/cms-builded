import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import React from "react";

type Props = {} & InputProps;

export default function ShortTextInput({ ...props }: Props) {
  return (
    <FormControl mb={4}>
      <FormLabel>Short Text Input</FormLabel>
      <ChakraInput placeholder="Title" />
      <ChakraInput placeholder="Content" {...props} />
    </FormControl>
  );
}
