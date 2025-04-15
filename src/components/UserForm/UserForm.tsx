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
import { GenderSelect } from "@/ui/GenderSelect";
import { InterestCheckboxGroup } from "@/ui/InterestCheckboxGroup";

type UserFormProps = {
  page: "create" | "update";
};

type SnackbarProps = {
  open: boolean;
  severity: "success" | "error" | undefined;
};

export const UserForm: FC<UserFormProps> = ({ page }) => {
  const router = useRouter();
  const params = useParams();

  // const [snackbarState, setSnackbarState] = useState<
  //   "success" | "error" | undefined
  // >(undefined);

  const [snackbarState, setSnackbarState] = useState<SnackbarProps>({
    open: false,
    severity: undefined,
  });

  console.log(snackbarState);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarState({ open: false, severity: snackbarState.severity });
  };

  // Это костыль, но он чинит проблему, что анимация TextField со строками ломается при открытии страницы пользвателя
  const defaultValues =
    page == "create"
      ? {
          lastName: "",
          firstName: "",
          middleName: "",
          age: "",
          gender: "",
          interests: [],
          musicGenre: "",
        }
      : {
          lastName: " ",
          firstName: " ",
          middleName: " ",
          age: " ",
          gender: " ",
          interests: [],
          musicGenre: " ",
        };

  const {
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

  // Переделать
  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    if (page == "create") {
      try {
        const res = await createUser(data);
        const json = await res.json();

        if (res.ok) {
          setSnackbarState({ open: snackbarState.open, severity: "success" });
          router.push(`/users/${json.id}`);
          reset();
        } else {
          setSnackbarState({ open: snackbarState.open, severity: "error" });
        }
      } catch {
        setSnackbarState({ open: snackbarState.open, severity: "error" });
      } finally {
        setSnackbarState({ open: true, severity: snackbarState.severity });
      }
    } else {
      try {
        if (params?.id) {
          const res = await updateUser(params.id.toString(), data);

          if (res.ok) {
            setSnackbarState({ open: snackbarState.open, severity: "success" });
            const updatedUser = await getUserById(params.id.toString());
            if (updatedUser) {
              reset(updatedUser);
            }
          } else {
            setSnackbarState({ open: snackbarState.open, severity: "error" });
          }
        }
      } catch {
        setSnackbarState({ open: snackbarState.open, severity: "error" });
      } finally {
        setSnackbarState({ open: true, severity: snackbarState.severity });
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
          name="lastName"
          control={control}
          icon={<Person color="action" />}
          requiredText="Это поле обязательно"
        />

        <Input
          label="* Имя"
          name="firstName"
          control={control}
          icon={<Person color="action" />}
          requiredText="Это поле обязательно"
        />

        <Input
          label="Отчество"
          name="middleName"
          control={control}
          icon={<Person color="action" />}
        />

        <Input
          label="* Возраст"
          name="age"
          control={control}
          icon={<Numbers color="action" />}
          requiredText="Это поле обязательно"
          pattern={{ value: /^[0-9]+$/, message: "Можно вводить только числа" }}
        />

        <GenderSelect
          name="gender"
          label="* Пол"
          control={control}
          error={!!errors.gender}
          options={genders}
          errors={errors.gender?.message}
        />

        <InterestCheckboxGroup
          name="interests"
          label="* Интересы"
          control={control}
          error={!!errors.interests}
          options={interests}
          errors={errors.interests?.message}
        />

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
        open={snackbarState.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarState.severity}
          sx={{ width: "100%" }}
        >
          {snackbarState.severity == "success"
            ? "Данные сохранены"
            : "Произошла ошибка"}
        </Alert>
      </Snackbar>
    </div>
  );
};
