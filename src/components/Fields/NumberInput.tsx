import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
} & InputProps;

export default function NumberInput({ label, ...props }: Props) {
  return (
    <FormControl mb={4}>
      <FormLabel>Number Input</FormLabel>
      <Input placeholder="Title" />
      <Input type="number" {...props} />
    </FormControl>
  );
}
