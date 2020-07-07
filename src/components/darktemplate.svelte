<script>
  import Logo from "./logo/index.svelte";
  import Category from "./menucategory/category.svelte";
  import { getCategories } from "../utils/api";
  import { onMount } from "svelte";
  export let menu;
  let categories;
  let columns = [[], []];

  onMount(async () => {
    categories = await getCategories(menu);
    columns = Object.keys(categories).reduce(
      (cols, cat, i) => {
        const c = i % 3;
        cols[c].push(categories[cat]);
        return cols;
      },
      [[], [], []]
    );
  });
</script>

<style>
  :global(html, body, span, a, button, div, h1, h2) {
    font-family: "Oswald", sans-serif;
  }

  .menu {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
    flex: 1;
  }

  .dark-menu {
    background-color: #131313;
    color: #fff;
  }

  .menu h1 {
    text-align: center;
    font-size: 2em;
    margin: 15px 10% 25px;
  }

  .menu-content {
    padding: 15px 25px;
  }

  .menu.dark-menu .menu-content {
    border-top: 1px solid;
    padding: 15px 0px;
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

  @media (min-width: 750px) {
    .menu {
      padding: 30px 0;
    }

    .title-image {
      display: none;
    }

    .menu.dark-menu .menu-content {
      padding: 15px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .column {
      min-width: 40%;
      flex: 1 0 40%;
      padding: 0 30px;
      box-sizing: border-box;
    }
  }

  @media (min-width: 1100px) {
    .menu.dark-menu .menu-content {
      column-count: 3;
    }
    .column {
      min-width: 30%;
      flex: 1 0 30%;
      max-width: 30%;
    }
  }
</style>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<section class="menu dark-menu">
  <div class="container">
    <Logo logo={menu.menus_template.logo} />
    <h1>MENU</h1>
    <div class="menu-content">
      {#each columns as column, i}
        <div class="column">
          {#each column as category, j}
            <Category {category} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
