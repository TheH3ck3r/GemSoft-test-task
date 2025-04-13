import { TextField } from "@mui/material";
import { FC, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  error?: boolean;
  helperText?: ReactNode;
  icon?: ReactNode;
  inputProps?: UseFormRegisterReturn;
};

export const Input: FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  inputProps,
}) => (
  <div className={styles.input_wrapper}>
    {icon && <div className={styles.icon}>{icon}</div>}
    <TextField
      {...inputProps}
      label={label}
      color="secondary"
      error={error}
      helperText={helperText}
      fullWidth
      margin="normal"
      sx={{
        "& .MuiInputBase-input": {
          fontSize: "20px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "20px",
        },
      }}
    />
  </div>
);
