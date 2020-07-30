import axios from "axios"
const $axios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization:
      `Bearer ${process.env.STRAPI_JWt}`,
  }
})

export const uploadsUrl = process.env.UPLOADS_URL

export const getImageUrl = (image) => {
  return `${uploadsUrl}${image.url}`
}

export const getMenus = async () => {
  const { data } = await $axios.get('/menus?_limit=-1');

  return data
}
export const getRestaurants = async () => {
  const { data } = await $axios.get('/restaurantes');

  return data
}

export const getMenuSingle = async (slug) => {
  const { data } = await $axios.get(`/menus?slug=${slug}`);

  return data
}

export const getMenuByRestaurant = async (restaurant) => {
  const { data } = await $axios.get(`/menus?restaurante.slug=${restaurant}`);

  return data
}

export const getCategoriesByMenu = async (menuId) => {
  const { data } = await $axios.get(`/categorias?menu=${menuId}&_limit=-1&activo=true`);

  return data
}

export const getPlatillosByCategoria = async (category) => {
  const params = `categorias.id=${category.id}&_limit=-1&activo=true`
  const { data } = await $axios.get(`/platillos?${params}`);
  return data
}

export const fetchData = async (menuslug) => {
  const [menu] = await getMenuSingle(menuslug)
  return { menu }
}

export const getCategories = async (menu) => {
  const categoriesArray = (menu.categorias || []).sort((a, b) => {
    return a.orden - b.orden
  })
  return categoriesArray || []
}

export const getDishes = async (category) => {
  const params = `categorias.id=${category.id}&_limit=-1&_sort=orden:ASC&activo=true`
  const { data } = await $axios.get(`/platillos?${params}`);
  return data
}

export const getDishesCount = async (category) => {
  const params = `categorias.id=${category.id}&_limit=-1&_sort=orden:ASC&activo=true`
  const { data } = await $axios.get(`/platillos/count?${params}`);
  return data
}