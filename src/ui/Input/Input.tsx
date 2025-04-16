import { UserProps } from "@/types/props";
import { InputAdornment, TextField } from "@mui/material";
import { FC, ReactNode } from "react";
import { Control, Controller, ValidationRule } from "react-hook-form";

type InputProps = {
  label: string;
  name: keyof UserProps;
  control: Control<UserProps>;
  icon?: ReactNode;
  requiredText?: string | ValidationRule<boolean> | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
};

export const Input: FC<InputProps> = ({
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
