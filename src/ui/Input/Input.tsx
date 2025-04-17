import { FormComponentProps } from "@/data-types/props";
import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

export const Input: FC<FormComponentProps> = ({
  label,
  name,
  control,
  icon,
  requiredText,
  pattern,
}) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: requiredText, pattern: pattern }}
    render={({ field }) => (
      <TextField
        label={label}
        {...field}
        color="secondary"
        error={!!control._formState.errors[name]}
        helperText={control._formState.errors[name]?.message}
        fullWidth
        margin="normal"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          },
        }}
        // sx={{
        //   "& .MuiInputBase-input": {
        //     fontSize: "20px",
        //   },
        //   "& .MuiInputLabel-root": {
        //     fontSize: "20px",
        //   },
        // }}
      />
    )}
  />
);
