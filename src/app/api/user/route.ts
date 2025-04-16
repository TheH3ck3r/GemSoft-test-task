import usersDataStore from "@/common/stores/usersDataStore";
import { UserProps } from "@/types/props";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  if (usersDataStore.users[id]) {
    return NextResponse.json(usersDataStore.users[id], { status: 200 });
  } else {
    return NextResponse.json({ success: "Ramus says NO!" }, { status: 404 });
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  usersDataStore.deleteUser(id);

  return NextResponse.json({ success: "Ramus says BRUH!" }, { status: 200 });
}

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const updatedUser: UserProps = await req.json();

  const firstName = updatedUser.firstName?.toLowerCase() || "";
  const lastName = updatedUser.lastName?.toLowerCase() || "";
  if (firstName.includes("admin") || lastName.includes("admin")) {
    return NextResponse.json(
      { error: "Использование 'admin' в имени или фамилии недопустимо" },
      { status: 400 }
    );
  }

  usersDataStore.updateUser(id, updatedUser);

  return NextResponse.json({ success: "Ramus says OK!" }, { status: 201 });
}
