<script>
  import Logo from "./logo/index.svelte";
  import Category from "./menucategory/redcategory.emotion.svelte";
  import { getCategories, getImageUrl } from "../utils/api";
  import { onMount } from "svelte";
  export let menu;

  let columns = [[], []];
  let fetch = true;
  onMount(async () => {
    let categories = await getCategories(menu);
    columns = Object.keys(categories).reduce(
      (cols, cat, i) => {
        const c = i % 2;
        cols[c].push(categories[cat]);
        return cols;
      },
      [[], []]
    );
    fetch = false;
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Yellowtail&display=swap");

  :global(html, body, span, a, button, div, h1, h2) {
    font-family: "Oswald", sans-serif;
  }

  .menu {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    flex: 1;
  }

  .red-menu {
    background-color: #500c0d;
    color: #fff;
    background-image: url("../images/red_bg.JPG");
    background-attachment: fixed;
    background-size: cover;
  }

  .menu .separator h1 {
    text-align: center;
    font-size: 1.5em;
    margin: 15px 10% 0px 10%;
    color: #f9cd82;
  }

  .separator {
    margin: 10px 2%;
  }

  .menu-content {
    padding: 15px 25px;
    margin: 0 2%;
  }

  .menu.red-menu .menu-content {
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

  @media (min-width: 1000px) {
    .menu {
      padding: 30px 0;
    }

    .menu .separator h1 {
      text-align: center;
      font-size: 2em;
      margin: 15px 10% 0px 10%;
    }

    .menu.red-menu .menu-content {
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
  }

  @media (min-width: 1100px) {
    .menu.red-menu .menu-content {
      column-count: 3;
    }
  }
</style>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet" />
</svelte:head>
{#if !fetch}
  <section class="menu red-menu">
    <div class="container">
      {#if menu.menus_template}
        <Logo logo={menu.menus_template.logo} />
      {/if}
      <div class="separator">
        <h1>MENÚ</h1>
      </div>
      <div class="menu-content">
        {#each columns as column, i}
          <div class="column">
            {#each column as category, j}
              <Category {category} {getImageUrl} />
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </section>
{:else}
  <p>fetching category...</p>
{/if}