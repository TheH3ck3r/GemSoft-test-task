import { InputAdornment, TextField } from "@mui/material";
import { FC, ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: string;
  inputProps: UseFormRegisterReturn;
  icon?: ReactNode;
  errors?: FieldError | undefined;
};

export const Input: FC<InputProps> = ({ label, icon, inputProps, errors }) => (
  <TextField
    {...inputProps}
    label={label}
    color="secondary"
    error={!!errors}
    helperText={errors?.message}
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
