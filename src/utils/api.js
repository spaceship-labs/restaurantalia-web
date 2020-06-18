import axios from "axios"
const $axios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization:
      `Bearer ${process.env.STRAPI_JWt}`,
  }
})

// const uploadsUrl = ''//process.env.API_URL

export const uploadsUrl = process.env.UPLOADS_URL

export const getImageUrl = (image) => {
  return `${uploadsUrl}${image.url}`
}

export const getMenus = async () => {
  const { data } = await $axios.get('/menus');

  return data
}

export const getMenuSingle = async (slug) => {
  const { data } = await $axios.get(`/menus?slug=${slug}`);

  return data
}

export const getCategoriesByMenu = async (menuId) => {
  const { data } = await $axios.get(`/categorias?menu=${menuId}`);

  return data
}

export const getPlatillosByCategoria = async (cats) => {
  const params = cats.reduce((result, cat) => {
    const join = result === "" ? '' : '&'
    let newResult = `${join}categoria_in=${cat.id}`
    return result + newResult
  }, "")
  // console.log('PARAMS', params)
  const { data } = await $axios.get(`/platillos?${params}`);

  return data
}