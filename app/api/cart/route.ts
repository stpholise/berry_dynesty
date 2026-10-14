import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { sql } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const items = await sql`
    SELECT product_id, quantity
    FROM cart_items
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
  `;

  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: unknown = await request.json();

  if (
    typeof body !== "object" ||
    body === null ||
    !("productId" in body) ||
    typeof body.productId !== "string" ||
    !body.productId.trim() ||
    !("quantity" in body) ||
    typeof body.quantity !== "number" ||
    !Number.isSafeInteger(body.quantity) ||
    body.quantity < 1
  ) {
    return NextResponse.json(
      { error: "Invalid product ID or quantity." },
      { status: 400 },
    );
  }

  const [item] = await sql`
    INSERT INTO cart_items (user_id, product_id, quantity)
    VALUES (${userId}, ${body.productId}, ${body.quantity})
    ON CONFLICT (user_id, product_id)
    DO UPDATE SET
      quantity = EXCLUDED.quantity,
      updated_at = NOW()
    RETURNING product_id, quantity
  `;

  return NextResponse.json({ item });
}

export async function DELETE(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: unknown = await request.json();

  if (
    typeof body !== "object" ||
    body === null ||
    !("productId" in body) ||
    typeof body.productId !== "string" ||
    !body.productId.trim()
  ) {
    return NextResponse.json({ error: "Invalid product id." }, { status: 400 });
  }

  const [deleted] = await sql`
  DELETE FROM cart_items
  WHERE user_id = ${userId} AND product_id = ${body.productId}
  RETURNING product_id, quantity
  `;
  if (!deleted) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }
  
  
  return NextResponse.json({ item: deleted });
}
