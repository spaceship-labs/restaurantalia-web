<script>
  import Dish from "../dish/whitedish.svelte"
  export let category
</script>
{#if category.dishes.length >0 }
<article class="menu-category">
  <h2>{category.nombre}</h2>
  {#each category.dishes as dish}
    <Dish dish={dish} />
  {/each}
</article>
{/if}

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
    border-left:0;
    border-right:0;
  }
  .column article:nth-child(1) h2{
    margin: 0;
  }
</style>