"use client";

import styles from "./UserForm.module.scss";
import { Back } from "@/components/Back";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { UserProps } from "@/data-types/props";
import {
  Alert,
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import { createUser } from "@/common/fetcher";
import { useState } from "react";

export const UserForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const genders = [
    { value: "male", label: "Мужской" },
    { value: "female", label: "Женский" },
  ];

  const interests = [
    { value: "movies", label: "Фильмы" },
    { value: "music", label: "Музыка" },
    { value: "cars", label: "Машины" },
    { value: "games", label: "Игры" },
  ];

  const musicGenres = [
    { value: "rock", label: "Рок" },
    { value: "pop", label: "Поп" },
    { value: "jazz", label: "Джаз" },
    { value: "classical", label: "Классическая" },
    { value: "hiphop", label: "Хип-хоп" },
    { value: "electronic", label: "Электронная" },
  ];

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserProps>({
    defaultValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      age: 0,
      gender: "",
      interests: [],
      musicGenre: "",
    },
  });

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    try {
      const res = await createUser(data);
      if (!res.ok) {
        setSnackbarSeverity("error");
      } else {
        setSnackbarSeverity("success");
        reset();
      }
    } catch {
      setSnackbarSeverity("error");
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="* Фамилия"
          {...register("lastName", { required: "Это поле обязательно" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          fullWidth
          margin="normal"
        />

        <TextField
          label="* Имя"
          {...register("firstName", { required: "Это поле обязательно" })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Отчество"
          {...register("middleName")}
          fullWidth
          margin="normal"
        />

        <TextField
          label="* Возраст"
          {...register("age", { required: "Это поле обязательно" })}
          error={!!errors.age}
          helperText={errors.age?.message}
          fullWidth
          margin="normal"
          type="number"
        />

        {/* TODO: Переделать нормально */}
        <FormControl
          component="fieldset"
          className={styles.full_width}
          margin="normal"
          error={!!errors.gender}
        >
          <FormLabel>* Пол</FormLabel>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Выберите пол" }}
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel
                  value={genders[0].value}
                  control={<Radio />}
                  label={genders[0].label}
                />
                <FormControlLabel
                  value={genders[1].value}
                  control={<Radio />}
                  label={genders[1].label}
                />
              </RadioGroup>
            )}
          />
          <FormHelperText>{errors.gender?.message}</FormHelperText>
        </FormControl>

        {/* TODO: Переделать нормально */}
        <FormControl
          component="fieldset"
          error={!!errors.interests}
          margin="normal"
        >
          <FormLabel>* Интересы</FormLabel>
          <FormGroup row>
            {interests.map((interest) => (
              <FormControlLabel
                key={interest.value}
                label={interest.label}
                control={
                  <Controller
                    name="interests"
                    control={control}
                    rules={{
                      validate: (selected) =>
                        selected.length >= 2 || "Выберите минимум два интереса",
                    }}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={field.value.includes(interest.value)}
                        onChange={(e) => {
                          const selected = e.target.checked
                            ? [...field.value, interest.value]
                            : field.value.filter((v) => v !== interest.value);
                          field.onChange(selected);
                        }}
                      />
                    )}
                  />
                }
              />
            ))}
          </FormGroup>
          {errors.interests && (
            <FormHelperText>{errors.interests.message}</FormHelperText>
          )}
        </FormControl>

        {/* TODO: в форму уходит label, а не value */}
        {watch("interests").includes("music") && (
          <Autocomplete
            options={musicGenres}
            renderInput={(params) => (
              <TextField
                {...params}
                {...register("musicGenre", {
                  required: "Это поле обязательно",
                })}
                label="* Жанр музыки"
                error={!!errors.musicGenre}
                helperText={errors.musicGenre?.message}
              />
            )}
          />
        )}

        <div className={styles.buttons}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Сохранить
          </Button>

          <Button onClick={() => reset()} variant="outlined" fullWidth>
            Сбросить
          </Button>

          {/* <Button type="submit" variant="contained" color="primary" fullWidth>
            УДОЛИТЬ!
          </Button> */}
        </div>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarSeverity == "success"
            ? "Данные сохранены"
            : "Произошла ошибка"}
        </Alert>
      </Snackbar>
    </div>
  );
};
