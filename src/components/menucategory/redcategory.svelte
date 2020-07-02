<script>
  import Dish from "../dish/reddish.svelte"

  export let category
  export let imageposition = ""
</script>
<article class="menu-category {imageposition}">
  <h2>{category.nombre}</h2>
  {#each category.dishes as dish,i}
    <Dish dish={dish} dishImagePosition={i%2!=0?'left':'right'}/>
  {/each}
</article>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
  :global(h2) {
    font-family: 'Yellowtail', cursive;
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