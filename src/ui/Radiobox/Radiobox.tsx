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
import { Controller } from "react-hook-form";
import { FormComponentProps } from "@/data-types/props";

export const Radiobox: FC<FormComponentProps> = ({
  label,
  name,
  control,
  options,
  requiredText,
  pattern,
  validate,
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
      rules={{ required: requiredText, pattern: pattern, validate: validate }}
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
          {options?.map((option) => (
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
