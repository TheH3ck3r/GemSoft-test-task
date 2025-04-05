"use client";

import styles from "./CreateUserForm.module.scss";
import { Back } from "@/components/Back";
import { useForm, Controller } from "react-hook-form";
import { UserForm } from "@/data-types/props";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export const CreateUserForm = () => {
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
    setValue,
    formState: { errors },
  } = useForm<UserForm>({
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

  const onSubmit = (data: UserForm) => {
    console.log(data);
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

        <FormControl
          component="fieldset"
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

        {/* Тут должен быть выбор интересов */}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Отправить
        </Button>
      </form>
    </div>
  );
};
