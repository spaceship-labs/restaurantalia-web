<script>
  import Category from "./menucategory/whitecategory.svelte";
  import { getCategories, getImageUrl } from "../utils/api";
  import { onMount } from "svelte";
  export let menu;
  let categories;
  let columns = [[], []];

  onMount(async () => {
    categories = await getCategories(menu);
    columns = Object.keys(categories).reduce(
      (cols, cat, i) => {
        const c = i % 2;
        cols[c].push(categories[cat]);
        return cols;
      },
      [[], []]
    );
  });
</script>

<style>
  :global(html, body, span, a, button, div, h1, h2) {
    font-family: "Oswald", sans-serif;
  }
  .container {
    background-color: #f0efed;
  }
  .menu {
    color: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    flex: 1;
  }

  .white-menu {
    background-color: #000;
    color: #000;
  }

  .menu .logo {
    text-align: center;
    margin: 20px 10%;
  }

  .menu .logo img {
    max-width: 250px;
    position: relative;
    z-index: 1;
  }

  .menu .separator h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5em;
    margin: 15px 10% 0px 10%;
  }
  .menu .separator h1:before,
  .menu h1:after {
    content: "●●●";
    font-size: 0.5em;
    padding: 0 0.5em;
  }

  .separator {
    border-top: solid 2px #000;
    margin: 10px 2%;
  }

  .menu-content {
    padding: 15px 25px;
    margin: 0 2%;
  }

  .menu.white-menu .menu-content {
    padding: 0px 0px 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .title-image {
    position: absolute;
    top: -60px;
    right: -30px;
    max-width: 300px;
    z-index: 0;
  }
  .column {
    min-width: 100%;
    flex: 1 0 100%;
    box-sizing: border-box;
  }

  @media (min-width: 750px) {
    .menu {
      padding: 30px 0;
    }

    .title-image {
      display: none;
    }
    .menu .separator h1 {
      text-align: center;
      font-size: 2em;
      margin: 15px 10% 0px 10%;
    }
    .menu .logo img {
      max-width: 300px;
    }
    .menu.white-menu .menu-content {
      padding: 0px 0px 15px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .column {
      min-width: 50%;
      flex: 1 0 50%;
      box-sizing: border-box;
    }
    .column:nth-child(1) {
      border-right: 2px solid #000;
    }
  }

  @media (min-width: 1100px) {
    .menu .logo img {
      max-width: 380px;
    }
    .menu.white-menu .menu-content {
      column-count: 3;
    }
  }
</style>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<section class="menu white-menu">
  <div class="container">
    {#if menu.menus_template.logo}
      <div class="logo">
        <img
          alt="restaurant name"
          src={getImageUrl(menu.menus_template.logo)} />
      </div>
    {/if}
    <div class="separator">
      <h1>MENÚ</h1>
    </div>
    <div class="menu-content">
      {#each columns as column, i}
        <div class="column">
          {#each column as category, j}
            <Category {category} column={i} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
