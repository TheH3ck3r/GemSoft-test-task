"use client";

import { FC } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller, Control, ValidationRule } from "react-hook-form";
import { UserProps } from "@/types/props";

type Option = {
  label: string;
  value: string;
};

type RadioboxProps = {
  label: string;
  name: keyof UserProps;
  control: Control<UserProps>;
  options: Option[];
  requiredText?: string | ValidationRule<boolean> | undefined;
};

export const Radiobox: FC<RadioboxProps> = ({
  label,
  name,
  control,
  options,
  requiredText,
}) => (
  <FormControl
    component="fieldset"
    margin="normal"
    error={!!control._formState.errors[name]}
    color="secondary"
  >
    <FormLabel>{label}</FormLabel>
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredText }}
      render={({ field }) => (
        <RadioGroup
          row
          {...field}
          // sx={{
          //   "& .MuiRadio-root": {
          //     color: "#FD5200",
          //   },
          // }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      )}
    />
    <FormHelperText>{control._formState.errors[name]?.message}</FormHelperText>
  </FormControl>
);
