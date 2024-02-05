import React from "react";
import { FormControl, Input, Box, Text } from "native-base";
import { useForm, Controller } from "react-hook-form";

const Form = ({ label, type, name, control }) => {
  return (
    <Box>
      <Controller
        control={control}
        // rules={{}}

        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl>
            <FormControl.Label>{label}</FormControl.Label>
            <Input
              type={type}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </FormControl>
        )}
        name={name}
      />
    </Box>
  );
};

export default Form;
