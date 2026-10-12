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


export async function fetchCartItems(){
  const res = await fetch("/api/cart")
  if (res.status === 401) throw new Error("Unauthorized");

  if(!res.ok) throw new Error("Failed to load cart")

    const data = await res.json();
    return data.items as { product_id: number; quantity: number }[];

}