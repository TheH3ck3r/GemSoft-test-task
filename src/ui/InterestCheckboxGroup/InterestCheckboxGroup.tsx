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
  name:
    | "lastName"
    | "firstName"
    | "middleName"
    | "age"
    | "gender"
    | "interests"
    | "musicGenre"
    | `interests.${number}`;
  control: Control<UserProps>;
  error: boolean;
  options: Option[];
  // label: string;
  icon: ReactNode;
  errors: string | undefined;
};

export const InterestCheckboxGroup: FC<InterestCheckboxGroupProps> = ({
  name,
  control,
  error,
  options,
  errors,
  icon,
}) => (
  <>
    <FormControl
      component="fieldset"
      error={!!error}
      margin="normal"
      className={styles.interest_wrapper}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <FormGroup row>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            label={option.label}
            control={
              <Controller
                name={name}
                control={control}
                rules={{
                  validate: (selected) =>
                    selected.length >= 2 || "Выберите минимум два интереса",
                }}
                render={({ field }) => (
                  <div>
                    <Checkbox
                      {...field}
                      checked={field.value?.includes(option.value)}
                      onChange={(e) => {
                        const selected = e.target.checked
                          ? [...field.value, option.value]
                          : field.value.filter(
                              (v: string) => v !== option.value
                            );
                        field.onChange(selected);
                      }}
                    />
                  </div>
                )}
              />
            }
          />
        ))}
      </FormGroup>
      <FormHelperText>{errors}</FormHelperText>
    </FormControl>
  </>
);
