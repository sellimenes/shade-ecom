import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, description, isFeatured, isArchived, categoryId } =
      body;

    if (!name) {
      return new NextResponse("Name is required.", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is required.", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description is required.", { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        isFeatured,
        isArchived,
        categoryId,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    console.log(error, "PRODUCTS POST ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
