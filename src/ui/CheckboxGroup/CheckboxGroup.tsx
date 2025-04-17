"use client";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { FormComponentProps } from "@/data-types/props";

export const CheckboxGroup: FC<FormComponentProps> = ({
  name,
  control,
  options,
  label,
  requiredText,
  pattern,
  validate,
}) => (
  <FormControl
    component="fieldset"
    error={!!control._formState.errors[name]}
    margin="normal"
  >
    <FormLabel>{label}</FormLabel>
    <FormGroup row>
      <Controller
        name={name}
        control={control}
        rules={{
          required: requiredText,
          pattern: pattern,
          validate: validate,
        }}
        render={({ field }) => (
          <>
            {options?.map((option) => {
              const checked = Array.isArray(field.value)
                ? field.value.includes(option.value)
                : false;

              const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.target.checked
                  ? [...(field.value || []), option.value]
                  : (Array.from(field.value) || []).filter(
                      (v: string) => v !== option.value
                    );

                field.onChange(newValue);
              };

              return (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name={option.value}
                    />
                  }
                  label={option.label}
                />
              );
            })}
          </>
        )}
      />
    </FormGroup>
    <FormHelperText>{control._formState.errors[name]?.message}</FormHelperText>
  </FormControl>
);
