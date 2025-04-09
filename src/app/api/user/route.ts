import { NextResponse } from "next/server";
import { users } from "../users/route";

export async function GET(id: number) {
  console.log("GET отработал");
  console.log(users.filter((user, index) => index == id));
  return NextResponse.json(
    users.filter((user, index) => index == id),
    { status: 200 }
  );
}
