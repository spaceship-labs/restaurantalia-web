<script>
  import Logo from "../logo/index.svelte";
  import Category from "../menucategory/index.emotion.svelte";
  import { getCategories } from "../../utils/api";
  import { categoryBalancer } from "../../utils/format";
  import { onMount } from "svelte";
  export let menu;
  let categories;
  let columns = [[], [], []];

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    menuWrapp,
    darkContent,
    container,
    content,
    whiteContent,
    title,
    titleRemoveDots,
    titleDark,
    titleSeparator,
    col3,
  } = CustomStyles($theme);

  onMount(async () => {
    categories = await getCategories(menu);
    columns = await categoryBalancer(categories, 3);
  });
</script>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<section class="{menuWrapp}">
  <div class="container">
    <Logo logo={menu.menus_template.logo} />
    <h1 class="{title} {titleRemoveDots} {titleDark}">MENU</h1>
    <div class="{content} {darkContent}">
      {#each columns as column, i}
        <div class={col3}>
          {#each column as category, j}
            <Category {category} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>