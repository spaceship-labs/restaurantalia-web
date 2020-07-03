<script>
  import { onMount } from 'svelte';
  import { getDishes } from '../../utils/api'
  import Dish from "../dish/dish.svelte"

  export let category
  let fetch=true;
  let dishes=[] 

  onMount(async () => {
    dishes = await getDishes(category);
    fetch=false;
	});
</script>
{#if dishes.length>0}
<article class="menu-category">
  <h2>{category.nombre}</h2>
  {#each dishes as dish}
    <Dish dish={dish} />
  {/each}
</article>
{:else}
<p>fetching dishes</p>
{/if}

<style>
  .menu-category {
    padding: 10px 0;
    position: relative;
    /* -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid; */
  }

  .menu-category h2 {
    font-size: 1.5em;
    margin: 0;
    margin-bottom: 15px;
  }

</style>