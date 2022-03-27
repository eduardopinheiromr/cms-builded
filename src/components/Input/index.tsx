import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
} & InputProps;

export default function Input({ label, ...props }: Props) {
  return (
    <FormControl mb={4}>
      <FormLabel>{label}:</FormLabel>
      <ChakraInput {...props} />
    </FormControl>
  );
}
