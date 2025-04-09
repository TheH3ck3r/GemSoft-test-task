import usersDataStore from "@/common/stores/usersDataStore";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(usersDataStore.users, { status: 200 });
}

export async function POST(req: Request) {
  const newUser = await req.json();
  usersDataStore.addUser(newUser);
  return NextResponse.json({ success: "Ramus says OK!" }, { status: 201 });
}

export async function DELETE() {
  usersDataStore.setUsersData([]);
  return NextResponse.json({ success: "Ramus says BRUH!" }, { status: 200 });
}
