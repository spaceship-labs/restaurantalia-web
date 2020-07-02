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
export const getRestaurants = async () => {
  const { data } = await $axios.get('/restaurantes');

  return data
}

export const getMenuSingle = async (slug) => {
  const { data } = await $axios.get(`/menus?slug=${slug}`);

  return data
}

export const getMenuByRestaurant = async(restaurant)=>{
  const { data } = await $axios.get(`/menus?restaurante.slug=${restaurant}`);

  return data
}

export const getCategoriesByMenu = async (menuId) => {
  const { data } = await $axios.get(`/categorias?menu=${menuId}`);

  return data
}

export const getPlatillosByCategoria = async (cats) => {
  const params = (cats || []).reduce((result, cat) => {
    const join = result === "" ? '' : '&'
    let newResult = `${join}categorias.id=${cat.id}`
    return result + newResult
  }, "")
  // console.log('PARAMS', params)
  const { data } = await $axios.get(`/platillos?${params}`);
  
  return data
}

export const fetchData = async(menuslug)=>{
  const [menu] = await getMenuSingle(menuslug)
  const platillos = await getPlatillosByCategoria(menu.categorias)
  const categoriesArray = (menu.categorias || []).sort((a, b) => {
    return a.Orden - b.Orden
  })
  //crea un objecto de categorias y le agrega los platillos que le corresponden
  const categories = (categoriesArray || []).reduce((result, cat) => {
    result[cat.id] = { ...cat, dishes: [] }
    return result
  }, {})
  for (let dish of (platillos || [])) {
    const { categorias, ...newDish } = dish
    for (let categoria of (categorias || [])) {
      categories[categoria.id].dishes.push(newDish)
    }
  }
  return { menu, categories, platillos, uploadsUrl };
}