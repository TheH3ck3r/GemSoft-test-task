import { UserProps } from "@/types/props";

export const users: UserProps[] = [
  {
    firstName: "Иван",
    lastName: "Иванов",
    middleName: "Иванович",
    age: 30,
    gender: "male",
    interests: ["music", "games"],
    musicGenre: "rock",
  },
  {
    firstName: "Анна",
    lastName: "Петрова",
    middleName: "Сергеевна",
    age: 25,
    gender: "female",
    interests: ["movies"],
    musicGenre: "",
  },
];

export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const newUser = await req.json();
  users.push(newUser);
  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
