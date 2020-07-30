<script context="module">
  import SingleMenu from "./[menuslug].svelte";
  import { fetchData, getMenuByRestaurant } from "../../utils/api.js";
  export async function preload({ params }) {
    let { restaurantslug } = params;
    const menus = await getMenuByRestaurant(restaurantslug);
    // check if list of menus
    if (menus.length == 0) {
      return { error: true };
    }
    // check if render a list
    if (menus.length > 1) {
      return { menus, single: false };
    }
    // fetch a menu
    const { slug } = menus[0];
    const menuData = await fetchData(slug);
    return { slug, single: true };
  }
</script>

<script>
  export let error;
  export let menus;
  export let single;
  $: navMenus = (menus || []).map(menu => ({
    link: `/${menu.restaurante.slug}/${menu.slug}`,
    title: menu.nombre
  }));
  import Brown4Images from "../../components/menu/brown4images.svelte";
  import DarkTemplate from "../../components/menu/darktemplate.svelte";
  import WhiteTemplate from "../../components/menu/whitetemplate.svelte";
  import RedTemplate from "../../components/menu/redtemplate.svelte";
  import { theme } from "../../utils/theme.js";
  import { getImageUrl } from "../../utils/api.js";
  import { onMount } from "svelte";

  export let slug;
  let menu;
  let template;
  let fetch = true;
  onMount(async () => {
    const data = await fetchData(slug);
    menu = data.menu;
    menu.categorias = menu.categorias.filter(c => c.activo);
    const { configuracion, fondo, imagenes } = menu.menus_template;
    template = menu.menus_template.template;
    fetch = false;
    const colors = ["green", "red", "yellow", "blue", "purple"];
    theme.updateTheme({
      color: colors[template],
      config: configuracion,
      template,
      fondo,
      imagenes
    });
  });
</script>

<style>
  nav a {
    display: block;
  }
</style>

{#if !error}
  {#if !single}
    <nav>
      {#each navMenus as menu}
        <a href={menu.link}>{menu.title}</a>
      {/each}
    </nav>
  {:else if !fetch}
    {#if template === 1}
      <Brown4Images {getImageUrl} {menu} />
    {:else if template === 2}
      <DarkTemplate {getImageUrl} {menu} />
    {:else if template === 3}
      <WhiteTemplate {getImageUrl} {menu} />
    {:else}
      <RedTemplate {getImageUrl} {menu} />
    {/if}
  {:else}
    <p>fetching...</p>
  {/if}
{:else}
  <h1>
    404 El restaurante no tiene un menú activo o no está registrado en la
    plataforma.
  </h1>
{/if}
