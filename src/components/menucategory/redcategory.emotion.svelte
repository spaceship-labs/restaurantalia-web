<script>
  import { onMount } from "svelte";
  import { getDishes } from "../../utils/api";
  import Dish from "../dish/reddish.emotion.svelte";
  export let getImageUrl;
  export let imageposition = "";
  export let category;
  let fetch = true;
  let dishes = [];

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    menuCategory,
    title,
    titleWrapper,
    divider,
    imageCatWrapp,
  } = CustomStyles($theme);
  const imageClass = imageCatWrapp(imageposition)

  onMount(async () => {
    dishes = await getDishes(category);
    fetch = false;
  });
</script>

{#if dishes.length > 0}
  <article class="{menuCategory}">
    <div class={titleWrapper}>
      <h2 class="{title}">{category.nombre}</h2>
      <div class={divider} />
    </div>
    {#each dishes as dish, i}
      <Dish {dish} imagePosition={i % 2 !=0 ? 'left' : 'right' } {getImageUrl} />
    {/each}
  </article>
{:else if fetch}
  <p>fetching dishes</p>
{/if}