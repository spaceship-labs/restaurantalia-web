<script>
  import Dish from "../dish/demo.svelte"
  export let imageposition = ""
  export let imageurl = ""
</script>
<article class="menu-category {imageposition}">
  {#if imageurl !== "" && imageposition === "image-position-top"}
    <img alt="" src={imageurl} />
  {/if}
  <h2>Appetizers</h2>
  <Dish />
  <Dish />
  <Dish />
  {#if imageurl !== "" && imageposition !== "image-position-top"}
      <img alt="" src={imageurl} />
    {/if}
</article>

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

  .menu-category img {
    max-width: 90%;
    display: block;
    margin: 10px auto;
    /* -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid; */
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