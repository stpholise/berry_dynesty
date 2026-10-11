
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { sql } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  const items = await sql`
    SELECT product_id
    FROM wishlist_items
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
  `;

  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  const body: unknown = await request.json();

  if (
    typeof body !== "object" ||
    body === null ||
    !("productId" in body) ||
    typeof body.productId !== "string" ||
    !body.productId.trim()
  ) {
    return NextResponse.json(
      { error: "Invalid product ID." },
      { status: 400 },
    );
  }

  const [item] = await sql`
    INSERT INTO wishlist_items (user_id, product_id)
    VALUES (${userId}, ${body.productId})
    ON CONFLICT (user_id, product_id) DO NOTHING
    RETURNING product_id
  `;

  return NextResponse.json({
    item: item ?? { product_id: body.productId },
  });
}

export async function DELETE(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  const body: unknown = await request.json();

  if (
    typeof body !== "object" ||
    body === null ||
    !("productId" in body) ||
    typeof body.productId !== "string" ||
    !body.productId.trim()
  ) {
    return NextResponse.json(
      { error: "Invalid product ID." },
      { status: 400 },
    );
  }

  await sql`
    DELETE FROM wishlist_items
    WHERE user_id = ${userId}
      AND product_id = ${body.productId}
  `;

  return NextResponse.json({ success: true });
}
