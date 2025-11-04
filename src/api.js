const API_URL = "http://localhost:5000";  // your backend server

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
}

export async function addCategory(newCategory) {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCategory),
  });
  if (!response.ok) throw new Error("Failed to add category");
  return response.json();
}
