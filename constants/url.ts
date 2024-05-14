export const config = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
  endpoints: {
    products: '/products',
    favoriteProducts: '/favorite-products',
    cart: '/cart',
  },
}