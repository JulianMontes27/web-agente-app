import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/* Api route handler for Agent creation */
export async function POST(req: NextRequest) {
  /* Auth check */
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const { name, short_dsc } = body;

  if (!name) {
    return new NextResponse("[AGENTS: POST]: name is required.", {
      status: 400,
    });
  }
  if (!short_dsc) {
    return new NextResponse("[AGENTS: POST]: short_dsc is required.", {
      status: 400,
    });
  }

  try {
    // Create an Agent
    const agent = await prisma.table.create({
      data: {
        name,
        short_dsc,
      },
    });

    // Return the updated table, including the QR code
    return NextResponse.json(agent);
  } catch (error) {
    console.error(error);
    return new NextResponse("Error creating Agent.", { status: 500 });
  }
}
