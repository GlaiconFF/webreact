// src/services/api.ts
const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
