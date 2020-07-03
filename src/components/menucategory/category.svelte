<script>
  import Dish from "../dish/dish.svelte"
  export let category
</script>
{#if category.dishes.length>0}
<article class="menu-category">
  <h2>{category.nombre}</h2>
  {#each category.dishes as dish}
    <Dish dish={dish} />
  {/each}
</article>
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