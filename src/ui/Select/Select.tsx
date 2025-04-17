import { FormComponentProps } from "@/types/props";
import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

// TODO: Исправить ошибку из-за которой добавление Select в UserForm ломает форму

export const Select: FC<FormComponentProps> = ({
  name,
  control,
  options,
  label,
  requiredText,
}) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: requiredText }}
    render={({ field: { value, onChange, ref } }) => (
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
            error={!!control._formState.errors[name]}
            helperText={control._formState.errors[name]?.message}
          />
        )}
      />
    )}
  />
);
