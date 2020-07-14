<script>
  import Logo from "./logo/index.svelte";
  import Category from "./menucategory/index.emotion.svelte";
  import { getCategories } from "../utils/api";
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap");

  :global(html, body, span, a, button, div, h1, h2) {
    font-family: "Oswald", sans-serif;
  }

  .container {
    background-color: #f0efed;
    max-width: 95%;
  }

  .menu {
    color: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5% 0;
    flex: 1;
  }

  .white-menu {
    background-color: #000;
    color: #000;
  }

  .menu .separator h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5em;
    margin: 15px 10% 0px 10%;
    font-family: "Montserrat", sans-serif;
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

  .column {
    min-width: 100%;
    flex: 1 0 100%;
    box-sizing: border-box;
  }

  @media (min-width: 750px) {
    .menu .separator h1 {
      text-align: center;
      font-size: 2em;
      margin: 15px 10% 0px 10%;
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
    .menu.white-menu .menu-content {
      column-count: 3;
    }
  }
</style>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
</svelte:head>

<section class="menu white-menu">
  <div class="container">
    <Logo logo={menu.menus_template.logo} />
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