<script>
  import Logo from "../logo/index.svelte";
  import Category from "../menucategory/index.emotion.svelte";
  import { getCategories, getImageUrl } from "../../utils/api";
  import { categoryBalancer } from "../../utils/format";
  import { onMount } from "svelte";
  export let menu;
  let categories;
  let columns = [[], [], []];

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    menuWrapp,
    lightMenu,
    title,
    titleBrown,
    titleRemoveDots,
    titleImage,
    container,
    content,
    lightContent,
    col3,
  } = CustomStyles($theme);
  const images = $theme.imagenes.map(img => getImageUrl(img));
  // console.log('imagenes', images);

  onMount(async () => {
    categories = await getCategories(menu);
    columns = await categoryBalancer(categories, 3);
  });
</script>

<svelte:head>
  <title>{menu.nombre ? menu.nombre : ''} | Restaurantalia</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<section class="{menuWrapp} {lightMenu}">
  <div class="{container}">
    <Logo logo={menu.menus_template.logo} margin="left" />
    <h1 class="{title} {titleRemoveDots} {titleBrown}">MENU</h1>
    <img class={titleImage} alt="restaurant name" src={images[0]} />
    <div class="{content} {lightContent}">
      {#each columns as column, i}
        <div class={col3}>
          {#each column as category, j}
            {#if i === 0 && j === 1}
              <Category
                {category}
                imageposition="image-position-left"
                imageurl={images[0]} />
            {:else if i === 1 && j === 0}
              <Category
                {category}
                imageposition="image-position-top"
                imageurl={images[1]} />
            {:else if i === 1 && j === 1}
              <Category {category} imageurl={images[2]} />
            {:else if i === 1 && j === 0}
              <Category
                {category}
                imageposition="image-position-top2"
                imageurl={images[3]} />
            {:else}
              <Category {category} />
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>