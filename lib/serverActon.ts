import "server-only";
import { auth } from "@clerk/nextjs/server";
import { sql } from "@/lib/db";

export interface CartItemRow {
  product_id: string;
  quantity: number;
}

export async function getCartItems() : Promise<CartItemRow[]>{
  const { userId } = await auth();
  console.log({userId})

  if (!userId) {
    console.log('no user id')
    throw new Error("Unauthorized");
  }

 try {
   
    const rows = await sql`
      SELECT product_id, quantity
      FROM cart_items
      WHERE user_id = ${userId}
    `;

    

    return rows as CartItemRow[];
  } catch (error) {
    console.error("Database error fetching cart items:", error);
    throw new Error("Failed to fetch cart items from database.");
  }
}