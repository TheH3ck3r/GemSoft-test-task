import { UserProps } from "@/data-types/props";
import { kNextJsEndpoint } from "./app";

export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public responseText?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const request = async <T>(
  url: string,
  method: HttpMethod,
  body?: unknown
): Promise<T> => {
  try {
    const res = await fetch(`${kNextJsEndpoint}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new ApiError(text || "Ошибка запроса", res.status, text);
    }

    return await res.json();
  } catch (error) {
    console.error(`Ошибка ${method} ${url}:`, error);
    throw error;
  }
};

// ----------| Обёртки |----------
export const get = <T>(url: string) => request<T>(url, "GET");

export const post = <T>(url: string, body: unknown) =>
  request<T>(url, "POST", body);

export const put = <T>(url: string, body: unknown) =>
  request<T>(url, "PUT", body);

export const del = <T>(url: string) => request<T>(url, "DELETE");

// ----------| users |----------

export const getAllUsers = () => get<UserProps[]>(`/api/users`);

export const createUser = (user: UserProps) =>
  post<UserProps>(`/api/users`, user);

export const deleteUsers = () => del<null>(`/api/users`);

// ----------| user |----------

export const getUserById = (id: string) => get<UserProps>(`/api/user?id=${id}`);

export const updateUser = (id: string, user: UserProps) =>
  put<UserProps>(`/api/user?id=${id}`, user);

export const deleteUser = (id: string) => del<null>(`/api/user?id=${id}`);
