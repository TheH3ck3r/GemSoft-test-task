import { UserProps } from "@/types/props";

const users: UserProps[] = [
  {
    firstName: "Тестовое имя 1",
    lastName: "Тестовая фамилия 1",
    middleName: "Тестовое очество 1",
    age: 21,
    gender: "male",
    interests: ["music", "games"],
    musicGenre: "rock",
  },
  {
    firstName: "Тестовое имя 2",
    lastName: "Тестовая фамилия 2",
    middleName: "Тестовое очество 2",
    age: 35,
    gender: "female",
    interests: ["music"],
    musicGenre: "hiphop",
  },
];

export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
