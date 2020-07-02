<script context="module">
  import { getRestaurants } from "../utils/api.js"
  export async function preload() {
    const menus = await getRestaurants()
    return { menus }
  }
</script>

<script>
  export let menus
  // console.log('menus', menus)
  $: navMenus = menus.map(menu => ({
    link: `/${menu.slug}`,
    title: menu.slug
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