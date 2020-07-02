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
      const { categorias, ...newDish } = dish
      for(let categoria of categorias){
        categories[categoria.id].dishes.push(newDish)
      }
    }
    return { menu, categories, platillos, uploadsUrl };
  }
</script>
<script>
  import Brown4Images from "../../components/brown4images.svelte"
  import DarkTemplate from "../../components/darktemplate.svelte"
  import WhiteTemplate from "../../components/whitetemplate.svelte"
  import RedTemplate from "../../components/redtemplate.svelte"

  export let menu;
  export let categories
  export let uploadsUrl
  function getImageUrl(image) {
    return `${uploadsUrl}${image.url}`
  }
  const { template } = menu.menus_template
</script>

{#if template === 1}
  <Brown4Images getImageUrl={getImageUrl} menu={menu} categories={categories} />
{:else if template === 2}
  <DarkTemplate getImageUrl={getImageUrl} menu={menu} categories={categories} />
{:else if template === 3}
  <WhiteTemplate getImageUrl={getImageUrl} menu={menu} categories={categories} />
{:else}
  <RedTemplate getImageUrl={getImageUrl} menu={menu} categories={categories} />
{/if}