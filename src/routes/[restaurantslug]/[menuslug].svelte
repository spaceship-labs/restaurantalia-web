<script context="module">
  import { getMenuSingle, getPlatillosByCategoria, uploadsUrl } from "../../utils/api.js"
  export async function preload({ params }) {
    let { restaurantslug, menuslug } = params;
    //pide el menu actual y los platillos con las categorias que vienen en el menu
    const [menu] = await getMenuSingle(menuslug)
    const platillos = await getPlatillosByCategoria(menu.categorias)
    const categoriesArray = menu.categorias.sort((a, b) => {
      return a.Orden - b.Orden
    })
    //crea un objecto de categorias y le agrega los platillos que le corresponden
    const categories = categoriesArray.reduce((result, cat) => {
      result[cat.id] = { ...cat, dishes: [] }
      return result
    }, {})
    for (let dish of platillos) {
      const { categoria, ...newDish } = dish
      categories[categoria.id].dishes.push(newDish)
    }
    return { menu, categories, platillos, uploadsUrl };
  }
</script>
<script>
  import Brown4Images from "../../components/brown4images.svelte"
  import DarkTemplate from "../../components/darktemplate.svelte"

  export let menu;
  export let categories
  export let uploadsUrl
  function getImageUrl(image) {
    return `${uploadsUrl}${image.url}`
  }
</script>

{#if menu.template === "brown_4_images"}
  <Brown4Images getImageUrl={getImageUrl} menu={menu} categories={categories} />
  {:else}
  <p>algo</p>
{/if}