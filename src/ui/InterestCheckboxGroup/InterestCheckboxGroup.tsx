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
import { Controller, Control } from "react-hook-form";
import { UserProps } from "@/types/props";

type Option = {
  label: string;
  value: string;
};

type InterestCheckboxGroupProps = {
  name: "interests"; // строгое значение
  control: Control<UserProps>;
  error?: boolean;
  options: Option[];
  errors: string | undefined;
  label: string;
};

export const InterestCheckboxGroup: FC<InterestCheckboxGroupProps> = ({
  name,
  control,
  error,
  options,
  label,
  errors,
}) => (
  <FormControl component="fieldset" error={!!error} margin="normal">
    <FormLabel>{label}</FormLabel>
    <FormGroup row>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (selected: string[]) =>
            Array.isArray(selected) && selected.length >= 2
              ? true
              : "Выберите минимум два интереса",
        }}
        render={({ field }) => (
          <>
            {options.map((option) => {
              const checked = Array.isArray(field.value)
                ? field.value.includes(option.value)
                : false;

              const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.target.checked
                  ? [...(field.value || []), option.value]
                  : (field.value || []).filter(
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
    <FormHelperText>{errors}</FormHelperText>
  </FormControl>
);
