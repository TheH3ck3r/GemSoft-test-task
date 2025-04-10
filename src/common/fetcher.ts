import { UserProps } from "@/types/props";
import { kBaseEndpoint } from "./app";

// ----------| vacancy |----------

export const BaseFetcher = (url: string) =>
  fetch(`${kBaseEndpoint}${url}`, { method: "GET" }).then((data) =>
    data.json()
  );

export const VacancyFetcher = (url: string) =>
  fetch(`${kBaseEndpoint}vacancy${url}`, { method: "GET" }).then((data) =>
    data.json()
  );

// ----------| users |----------

export const getAllUsers = () => fetch("/api/users").then((res) => res.json());

export const getUserById = (id: string) =>
  fetch(`/api/user?id=${id}`).then((res) => res.json());

export const createUser = (user: UserProps) =>
  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });

export const deleteUsers = () => fetch(`/api/users`, { method: "DELETE" });

// ----------| user |----------

// export const updateUser = (id: number, user: UserProps) =>
//   fetch(`/api/user?id=${id}`, {
//     method: "PUT",
//     body: JSON.stringify(user),
//   });

export const deleteUser = (id: number) =>
  fetch(`/api/user?id=${id}`, { method: "DELETE" });
