"use client";

import styles from "./UserForm.module.scss";
import { Back } from "@/components/Back";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserProps } from "@/data-types/props";
import { useParams } from "next/navigation";
import { Alert, Button, Snackbar } from "@mui/material";
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
import { Radiobox } from "@/ui/Radiobox";
import { CheckboxGroup } from "@/ui/CheckboxGroup";
import { NotFound } from "../NotFound";
import { Select } from "@/ui/Select";

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

  const [error, setError] = useState(false);

  const [snackbarState, setSnackbarState] = useState<SnackbarProps>({
    open: false,
    severity: undefined,
  });

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
    formState: { isValid, isDirty },
  } = useForm<UserProps>({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (page === "update" && params?.id) {
        try {
          const userData = await getUserById(params.id.toString());
          if (userData) {
            reset(userData);
          }
        } catch {
          setError(true);
        }
      }
    };

    fetchUser();
  }, [page, params?.id, reset]);

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    if (page === "create") {
      try {
        const res = await createUser(data);
        const json = await res.json();

        if (res.ok) {
          setSnackbarState({ open: true, severity: "success" });
          router.push(`/users/${json.id}`);
          reset();
        } else {
          setSnackbarState({ open: true, severity: "error" });
        }
      } catch {
        setSnackbarState({ open: true, severity: "error" });
      }
    } else {
      try {
        if (params?.id) {
          const res = await updateUser(params.id.toString(), data);

          if (res.ok) {
            setSnackbarState({ open: true, severity: "success" });
            const updatedUser = await getUserById(params.id.toString());
            if (updatedUser) {
              reset(updatedUser);
            }
          } else {
            setSnackbarState({ open: true, severity: "error" });
          }
        }
      } catch {
        setSnackbarState({ open: true, severity: "error" });
      }
    }
  };

  if (error) {
    return <NotFound></NotFound>;
  }

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

        <Radiobox
          name="gender"
          label="* Пол"
          control={control}
          options={genders}
          requiredText="Выберете пол"
        />

        <CheckboxGroup
          name="interests"
          label="* Интересы"
          control={control}
          options={interests}
          validate={(selected) =>
            Array.isArray(selected) && selected.length >= 2
              ? true
              : "Выберите минимум два интереса"
          }
        />

        {watch("interests")?.includes("music") && (
          <Select
            label="* Жанр музыки"
            name="musicGenre"
            control={control}
            requiredText={"Это поле обязательно"}
            options={musicGenres}
          ></Select>
        )}

        <div className={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isValid}
          >
            Сохранить
          </Button>

          <Button
            onClick={() => reset()}
            variant="outlined"
            fullWidth
            disabled={!isDirty}
          >
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
