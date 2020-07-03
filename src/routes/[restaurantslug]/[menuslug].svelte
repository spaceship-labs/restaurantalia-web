<script context="module">
  import { uploadsUrl,fetchData } from "../../utils/api.js"
  export async function preload({ params }) {
    let { menuslug } = params;
    return await fetchData(menuslug)
  }
</script>
<script>
  import Brown4Images from "../../components/brown4images.svelte"
  import DarkTemplate from "../../components/darktemplate.svelte"
  import WhiteTemplate from "../../components/whitetemplate.svelte"
  import RedTemplate from "../../components/redtemplate.svelte"

  export let menu;
  export let categories
  export let uploadsUrl
  function getImageUrl(image) {
    return `${uploadsUrl}${image.url}`
  }
  const { template } = menu.menus_template
</script>

{#if template === 1}
  <Brown4Images getImageUrl={getImageUrl} menu={menu} categories={categories} />
{:else if template === 2}
  <DarkTemplate getImageUrl={getImageUrl} menu={menu} categories={categories} />
{:else if template === 3}
  <WhiteTemplate getImageUrl={getImageUrl} menu={menu} categories={categories} />
{:else}
  <RedTemplate getImageUrl={getImageUrl} menu={menu} categories={categories} />
{/if}