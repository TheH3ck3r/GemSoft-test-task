import usersDataStore from "@/common/stores/usersDataStore";
import { UserProps } from "@/types/props";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(usersDataStore.users, { status: 200 });
}

export async function POST(req: Request) {
  const newUser: UserProps = await req.json();

  const firstName = newUser.firstName?.toLowerCase() || "";
  const lastName = newUser.lastName?.toLowerCase() || "";
  if (firstName.includes("admin") || lastName.includes("admin")) {
    return NextResponse.json(
      { error: "Использование 'admin' в имени или фамилии недопустимо" },
      { status: 400 }
    );
  }
  usersDataStore.addUser(newUser);

  return NextResponse.json({ success: "Ramus says OK!" }, { status: 201 });
}

export async function DELETE() {
  usersDataStore.setUsersData([]);

  return NextResponse.json({ success: "Ramus says BRUH!" }, { status: 200 });
}
