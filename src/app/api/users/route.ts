import usersDataStore from "@/common/stores/usersDataStore";

export async function GET() {
  return new Response(JSON.stringify(usersDataStore.users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// export async function POST(req: Request) {
//   const newUser = await req.json();
//   users.push(newUser);
//   return new Response(JSON.stringify({ success: true }), { status: 201 });
// }
