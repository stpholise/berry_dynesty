export async function saveCartItem(
  productId: string,
  quantity: number,
) {
  const response = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  });

  if (!response.ok) {
    throw new Error("Failed to save cart item.");
  }

  return response.json();
}


