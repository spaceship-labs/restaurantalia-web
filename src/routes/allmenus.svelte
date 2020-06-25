<script context="module">
  import { getMenus } from "../utils/api.js"
  export async function preload() {
    const menus = await getMenus()
    return { menus }
  }
</script>

<script>
  export let menus
  // console.log('menus', menus)
  $: navMenus = menus.map(menu => ({
    link: `/${menu.restaurante.slug}/${menu.slug}`,
    title: menu.nombre
  }))
</script>

<nav>
  {#each navMenus as menu}
    <a href={menu.link}>{menu.title}</a>
  {/each}
</nav>

<style>
  /* nav {
    visibility: hidden;
    opacity: 0;
    display: none;
  } */
  nav a{
    display: block;
  }
</style>