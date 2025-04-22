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
  validate,
}) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: requiredText, pattern: pattern, validate: validate }}
    render={({ field, fieldState }) => (
      <TextField
        label={label}
        {...field}
        color="secondary"
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
        fullWidth
        margin="normal"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
            onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
              let regex: RegExp | undefined;

              if (pattern instanceof RegExp) {
                regex = pattern;
              } else if (
                pattern &&
                typeof pattern === "object" &&
                pattern.value instanceof RegExp
              ) {
                regex = pattern.value;
              }

              if (regex) {
                const current = e.target.value;
                const match = current.match(regex);
                e.target.value = match ? match[0] : "";
                field.onChange(e);
              }
            },
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
