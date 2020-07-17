<script>
  import Logo from "../logo/index.svelte";
  import Category from "../menucategory/index.emotion.svelte";
  import { getCategories } from "../../utils/api";
  import { categoryBalancer } from "../../utils/format";
  import { onMount } from "svelte";
  export let menu;
  let categories;
  let columns = [[], []];

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    menuWrapp,
    container,
    content,
    whiteContent,
    title,
    titleSeparator,
    col,
  } = CustomStyles($theme);

  onMount(async () => {
    categories = await getCategories(menu);
    columns = await categoryBalancer(categories, 2);
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap");
</style>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
</svelte:head>

<section class="{menuWrapp}">
  <div class={container}>
    <Logo logo={menu.menus_template.logo} />
    <div class={titleSeparator}>
      <h1 class={title}>MENÚ</h1>
    </div>
    <div class="{content} {whiteContent}">
      {#each columns as column, i}
        <div class={col(true)}>
          {#each column as category, j}
            <Category {category} column={i} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>