import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = await prisma.messages.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        message: body.message,
      },
    });

    return Response.json(message);

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to create message" },
      { status: 500 }
    );
  }
}