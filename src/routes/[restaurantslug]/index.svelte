<script context="module">
  import SingleMenu from './[menuslug].svelte';
  import { fetchData,getMenuByRestaurant, uploadsUrl } from "../../utils/api.js"
  export async function preload({ params }) {
    let { restaurantslug } = params;
    const menus = await getMenuByRestaurant(restaurantslug)
    // check if list of menus
    if(menus.length == 0){
      return { error: true }
    }
    // check if render a list
    if (menus.length>1){
      return { menus, single:false }
    }
    // fetch a menu
    const { slug } = menus[0]
    const menuData = await fetchData(slug)
    return {slug, single:true}
  }
</script>

<script>
  export let error
  export let menus
  export let single
  $: navMenus = (menus||[]).map(menu => ({
    link: `/${menu.restaurante.slug}/${menu.slug}`,
  title: menu.nombre
  }))
  import Brown4Images from "../../components/brown4images.svelte"
  import DarkTemplate from "../../components/darktemplate.svelte"
  import WhiteTemplate from "../../components/whitetemplate.svelte"
  import RedTemplate from "../../components/redtemplate.svelte"
  import {onMount} from 'svelte';
  export let slug;
  let menu;
  let uploadsUrl;
  let template; 
  let fetch=true;
  onMount(async () => {
    const data = await fetchData(slug)
    menu = data.menu;
    uploadsUrl=data.uploadsUrl;
    template= menu.menus_template.template
    fetch=false;
  });
  function getImageUrl(image) {
    return `${uploadsUrl}${image.url}`
  }
</script>
{#if !error}
  {#if !single}
  <nav>
    {#each navMenus as menu}
      <a href={menu.link}>{menu.title}</a>
    {/each}
  </nav>
  {:else if !fetch}
    {#if template === 1}
      <Brown4Images getImageUrl={getImageUrl} menu={menu} />
    {:else if template === 2}
      <DarkTemplate getImageUrl={getImageUrl} menu={menu} />
    {:else if template === 3}
      <WhiteTemplate getImageUrl={getImageUrl} menu={menu} />
    {:else}
      <RedTemplate getImageUrl={getImageUrl} menu={menu}/>
    {/if}
  {:else}
    <p>fetching...</p>
  {/if}
{:else}
  <h1> 404 El restaurante no tiene un menú activo o no está registrado en la plataforma.</h1>
{/if}

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