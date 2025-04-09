import usersDataStore from "@/common/stores/usersDataStore";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  return NextResponse.json(usersDataStore.users[id], { status: 200 });
}
