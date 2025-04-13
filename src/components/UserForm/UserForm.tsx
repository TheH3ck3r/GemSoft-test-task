"use client";

import styles from "./UserForm.module.scss";
import { Back } from "@/components/Back";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { UserProps } from "@/data-types/props";
import { useParams } from "next/navigation";
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
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "@/common/fetcher";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { genders, interests, musicGenres } from "@/common/userFormData";
import Link from "next/link";
import { Input } from "@/ui/Input";
import { Numbers, Person } from "@mui/icons-material";

type UserFormProps = {
  page: "create" | "update";
};

export const UserForm: FC<UserFormProps> = ({ page }) => {
  const router = useRouter();
  const params = useParams();

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

  // Это костыль, но он чинит проблему, что анимация TextField со строками ломается при открытии страницы пользвателя
  const defaultValues =
    page == "create"
      ? {
          lastName: "",
          firstName: "",
          middleName: "",
          age: 0,
          gender: "",
          interests: [],
          musicGenre: "",
        }
      : {
          lastName: " ",
          firstName: " ",
          middleName: " ",
          age: 0,
          gender: " ",
          interests: [],
          musicGenre: " ",
        };

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserProps>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (page === "update" && params?.id) {
      getUserById(params.id.toString()).then((userData) => {
        if (userData) {
          reset(userData);
        }
      });
    }
  }, [page, params.id, reset]);

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    if (page == "create") {
      try {
        const res = await createUser(data);
        const json = await res.json();

        if (!res.ok) {
          setSnackbarSeverity("error");
        } else {
          setSnackbarSeverity("success");

          router.push(`/users/${json.id}`);

          reset();
        }
      } catch {
        setSnackbarSeverity("error");
      } finally {
        setSnackbarOpen(true);
      }
    } else {
      try {
        if (params?.id) {
          const res = await updateUser(params.id.toString(), data);

          if (!res.ok) {
            setSnackbarSeverity("error");
          } else {
            setSnackbarSeverity("success");

            const updatedUser = await getUserById(params.id.toString());
            if (updatedUser) {
              reset(updatedUser);
            }
          }
        }
      } catch {
        setSnackbarSeverity("error");
      } finally {
        setSnackbarOpen(true);
      }
    }
  };

  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      {page == "update" && <div>Профиль пользователя</div>}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="* Фамилия"
          inputProps={register("lastName", {
            required: "Это поле обязательно",
          })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          icon={<Person color="action" fontSize="large" />}
        />

        <Input
          label="* Имя"
          inputProps={register("firstName", {
            required: "Это поле обязательно",
          })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          icon={<Person color="action" fontSize="large" />}
        />

        <Input
          label="Отчество"
          inputProps={register("middleName")}
          icon={<Person color="action" fontSize="large" />}
        />

        <Input
          label="* Возраст"
          inputProps={register("age", {
            required: "Это поле обязательно",
            pattern: {
              value: /^[0-9]+$/,
              message: "Можно вводить только числа",
            },
          })}
          error={!!errors.age}
          helperText={errors.age?.message}
          icon={<Numbers color="action" fontSize="large" />}
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
                        checked={field.value?.includes(interest.value)}
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

        {watch("interests")?.includes("music") && (
          <Controller
            name="musicGenre"
            control={control}
            rules={{ required: "Это поле обязательно" }}
            render={({ field: { value, onChange, ref } }) => (
              <Autocomplete
                options={musicGenres}
                getOptionLabel={(option) => option.label}
                value={
                  musicGenres.find((option) => option.value === value) || null
                }
                onChange={(_, newOption) => {
                  onChange(newOption ? newOption.value : "");
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="* Жанр музыки"
                    inputRef={ref}
                    error={!!errors.musicGenre}
                    helperText={errors.musicGenre?.message}
                  />
                )}
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

          {page == "update" && (
            <Link href={"/users"}>
              <Button
                onClick={() => {
                  if (params?.id) {
                    deleteUser(params.id.toString());
                  }
                }}
                variant="contained"
                color="error"
                fullWidth
              >
                Удалить
              </Button>
            </Link>
          )}
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
