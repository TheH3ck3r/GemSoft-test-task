import { InputAdornment, TextField } from "@mui/material";
import { FC, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

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
  <TextField
    {...inputProps}
    label={label}
    color="secondary"
    error={error}
    helperText={helperText}
    fullWidth
    margin="normal"
    slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      },
    }}
    sx={{
      "& .MuiInputBase-input": {
        fontSize: "20px",
      },
      "& .MuiInputLabel-root": {
        fontSize: "20px",
      },
    }}
  />
);
