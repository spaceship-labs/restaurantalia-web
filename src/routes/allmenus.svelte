<script context="module">
  import { getRestaurants } from "../utils/api.js"
  export async function preload() {
    const restaurants = await getRestaurants()
    return { restaurants }
  }
</script>

<script>
  export let restaurants
  console.log('menus', restaurants)
  $: navRestaurants = restaurants.map(menu => ({
    link: `/${menu.slug}`,
    title: menu.slug,
    menus: menu.menus
  }))
</script>

<nav>
  {#each navRestaurants as restaurant}
    <!-- <a href={restaurant.link}>{restaurant.title}</a> -->
    {#each restaurant.menus as menu}
      <a href="{restaurant.link}/{menu.slug}">{restaurant.title} - {menu.nombre}</a>
    {/each}
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