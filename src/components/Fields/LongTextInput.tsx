import {
  FormControl,
  FormLabel,
  TextareaProps,
  Textarea,
  Input,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
} & TextareaProps;

export default function LongTextInput({ label, ...props }: Props) {
  return (
    <FormControl mb={4}>
      <FormLabel>Long Text Input</FormLabel>
      <Input placeholder="Title" />
      <Textarea placeholder="Content" {...props} />
    </FormControl>
  );
}
