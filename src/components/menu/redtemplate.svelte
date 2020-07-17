<script>
  import Logo from "../logo/index.svelte";
  import Category from "../menucategory/redcategory.emotion.svelte";
  import { getCategories, getImageUrl } from "../../utils/api";
  import { categoryBalancer } from "../../utils/format";
  import { onMount } from "svelte";
  export let menu;

  let categories;
  let columns = [[], []];
  let fetch = true;

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    menuWrapp,
    redMenu,
    content,
    redContent,
    whiteContent,
    title,
    titleRemoveDots,
    titleRedSeparator,
    col,
  } = CustomStyles($theme);

  onMount(async () => {
    categories = await getCategories(menu);
    columns = await categoryBalancer(categories, 2);
    fetch = false;
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Yellowtail&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap");
</style>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
</svelte:head>
{#if !fetch}
  <section class="{menuWrapp} {redMenu}">
    <div class="container">
      {#if menu.menus_template}
        <Logo logo={menu.menus_template.logo} />
      {/if}
      <div class={titleRedSeparator}>
        <h1 class="{title} {titleRemoveDots}">MENÚ</h1>
      </div>
      <div class="{content} {redContent}">
        {#each columns as column, i}
          <div class={col(false)}>
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