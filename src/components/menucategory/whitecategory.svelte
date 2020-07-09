<script>
  import { onMount } from "svelte";
  import Dish from "../dish/test.svelte";
  import { getDishes } from "../../utils/api";
  export let category;
  export let column;
  let fetch = true;
  let dishes = [];

  onMount(async () => {
    dishes = await getDishes(category);
    fetch = false;
  });
</script>

<style>
  .menu-category {
    padding: 0 0;
    position: relative;
    /* -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid; */
  }

  .menu-category h2 {
    text-transform: uppercase;
    font-size: 1.5em;
    margin: 15px 0;
    padding: 5px 25px;
    border: 2px solid #000;
    border-left: 0;
    border-right: 0;
    font-family: "Montserrat", sans-serif;
  }

  .pl {
    padding-left: 10% !important;
  }

  .column article:nth-child(1) h2 {
    margin: 0;
  }

  .description {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8em;
  }

  .mpl {
    padding-left: 3% !important;
  }
</style>

{#if dishes.length > 0}
  <article class="menu-category">

    <h2 class={column == 0 ? '' : 'pl'}>{category.nombre}</h2>
    <p class="description {column == 0 ? 'mpl' : 'pl'}">
      {category.descripcion || ''}
    </p>
    {#each dishes as dish}
      <Dish {dish} {column} />
    {/each}
  </article>
{:else if fetch}
  <p>fetching dishes</p>
{/if}