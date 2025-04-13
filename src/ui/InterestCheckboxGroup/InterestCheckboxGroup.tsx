"use client";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import styles from "./InterestCheckboxGroup.module.scss";
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
  icon?: ReactNode;
  errors: string | undefined;
};

export const InterestCheckboxGroup: FC<InterestCheckboxGroupProps> = ({
  name,
  control,
  error,
  options,
  icon,
  errors,
}) => (
  <FormControl
    component="fieldset"
    error={!!error}
    margin="normal"
    className={styles.interest_wrapper}
  >
    {icon && <div className={styles.icon}>{icon}</div>}
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
