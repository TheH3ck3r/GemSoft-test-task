"use client";

import { FC, ReactNode } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";
import styles from "./GenderSelect.module.scss";
import { UserProps } from "@/types/props";

type Option = {
  label: string;
  value: string;
};

type GenderSelectProps = {
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
  label: string;
  icon: ReactNode;
  errors: string | undefined;
};

export const GenderSelect: FC<GenderSelectProps> = ({
  name,
  control,
  error,
  options,
  label,
  icon,
  errors,
}) => (
  <FormControl
    component="fieldset"
    margin="normal"
    error={!!error}
    color="secondary"
  >
    <FormLabel>{label}</FormLabel>
    <Controller
      name={name}
      control={control}
      rules={{ required: "Выберите пол" }}
      render={({ field }) => (
        <div className={styles.gender_wrapper}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <RadioGroup
            row
            {...field}
            sx={{
              "& .MuiRadio-root": {
                color: "#FD5200",
              },
            }}
          >
            {options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        </div>
      )}
    />
    <FormHelperText>{errors}</FormHelperText>
  </FormControl>
);
