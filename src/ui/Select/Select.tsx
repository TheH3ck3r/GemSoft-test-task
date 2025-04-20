import { FormComponentProps } from "@/types/props";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

export const Select: FC<FormComponentProps> = ({
  name,
  control,
  options,
  label,
  requiredText,
  pattern,
  validate,
}) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: requiredText, pattern: pattern, validate: validate }}
    render={({ field: { value, onChange, ref }, fieldState }) => (
      <Autocomplete
        options={options!}
        getOptionLabel={(option) => option.label}
        value={options?.find((option) => option.value === value) || null}
        onChange={(_, newOption) => {
          onChange(newOption ? newOption.value : "");
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            inputRef={ref}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
    )}
  />
);
