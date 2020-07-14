<script>
  import { onMount } from "svelte";
  import Dish from "../dish/index.emotion.svelte";
  import { getDishes } from "../../utils/api";
  export let category;
  export let column;
  export let imageposition = "";
  export let imageurl = "";
  let fetch = true;
  let dishes = [];

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    catWrapper,
    title,
    titleColumnPadding,
    descColumnPadding,
    imageCatWrapp,
  } = CustomStyles($theme);
  const imageClass = imageCatWrapp(imageposition)

  onMount(async () => {
    dishes = await getDishes(category);
    fetch = false;
  });
</script>

{#if dishes.length > 0}
  <article class="{catWrapper} {imageClass}">
    {#if imageurl !== '' && imageposition === 'image-position-top'}
      <img alt="" src={imageurl} />
    {/if}
    <h2 class="{title} {titleColumnPadding(column)}" >{category.nombre}</h2>
    <p class="{descColumnPadding(column)}">
      {category.descripcion || ''}
    </p>
    {#each dishes as dish}
      <Dish {dish} {column} />
    {/each}
    {#if imageurl !== '' && imageposition !== 'image-position-top'}
      <img alt="" src={imageurl} />
    {/if}
  </article>
{:else if fetch}
  <p>fetching dishes</p>
{/if}