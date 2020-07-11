<script>
  import { onMount } from "svelte";
  import { getDishes } from "../../utils/api";
  // import Dish from "../dish/reddish.svelte";
  import Dish2 from "../dish/reddish.emotion.svelte";
  export let getImageUrl;
  export let imageposition = "";
  export let category;
  let fetch = true;
  let dishes = [];

  onMount(async () => {
    dishes = await getDishes(category);
    fetch = false;
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Yellowtail&display=swap");

  :global(h2) {
    font-family: "Yellowtail", cursive;
    color: #f9cd82;
  }

  .text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 80%;
  }

  h2 {
    flex-grow: 0;
  }

  .divider {
    flex-grow: 1;
    height: 1px;
    margin-left: 10px;
    background-color: #f9cd82;
  }

  .menu-category {
    padding: 10px 0;
    position: relative;
  }

  .menu-category h2 {
    font-size: 2em !important;
    margin: 0;
    margin-bottom: 15px;
  }

  .menu-category img {
    max-width: 90%;
    display: block;
    margin: 10px auto;
  }

  @media (min-width: 750px) AND (max-width: 1099px) {
    .image-position-top img {
      position: relative;
      margin-top: -180px;
      left: 150px;
      max-width: 100%;
    }
  }

  @media (min-width: 1100px) {
    .menu-category img {
      max-width: 280px;
      margin: 20px auto;
    }

    .image-position-top img {
      position: absolute;
      bottom: 80%;
      right: 90%;
    }

    .image-position-top2 img {
      position: absolute;
      bottom: 80%;
      left: 70%;
    }

    .image-position-left img {
      position: absolute;
      top: 0%;
      right: 100%;
      left: unset;
    }
  }
</style>

{#if dishes.length > 0}
  <article class="menu-category {imageposition}">
    <div class="text-container">
      <h2>{category.nombre}</h2>
      <div class="divider" />
    </div>
    {#each dishes as dish, i}
      <!-- <Dish
        {dish}
        dishImagePosition={i % 2 != 0 ? 'left' : 'right'}
        {getImageUrl} /> -->
      <Dish2 {dish} imagePosition={i % 2 !=0 ? 'left' : 'right' } {getImageUrl} />
    {/each}
  </article>
{:else if fetch}
  <p>fetching dishes</p>
{/if}