<script context="module">
  export async function preload({ params }) {
    let { menuslug } = params;
    return { menuslug }
  }
</script>
<script>
  import Brown4Images from "../../components/brown4images.svelte"
  import DarkTemplate from "../../components/darktemplate.svelte"
  import WhiteTemplate from "../../components/whitetemplate.svelte"
  import RedTemplate from "../../components/redtemplate.svelte"
  import { uploadsUrl, fetchData } from "../../utils/api.js"
  import { theme } from "../../utils/theme.js"

  import { onMount } from 'svelte';
  export let menuslug;
  let menu;
  let template;
  let fetch = true;
  onMount(async () => {
    const data = await fetchData(menuslug)
    menu = data.menu;
    const { configuracion } = menu.menus_template;
    // template = menu.menus_template.template;
    template = 4;
    fetch = false;
    const colors = ['green', 'red', 'yellow', 'blue', 'purple'];
    theme.updateTheme({
      color: colors[template],
      config: configuracion,
      template,
    });
    console.log('CONFIG', configuracion)
  });
  function getImageUrl(image) {
    return `${uploadsUrl}${image.url}`
  }
</script>
{#if fetch}
    <p>Fetching...</p>
  {:else}
    {#if template === 1}
      <Brown4Images getImageUrl={getImageUrl} menu={menu} />
    {:else if template === 2}
      <DarkTemplate getImageUrl={getImageUrl} menu={menu} />
    {:else if template === 3}
      <WhiteTemplate getImageUrl={getImageUrl} menu={menu} />
    {:else if template === 4}
      <RedTemplate getImageUrl={getImageUrl} menu={menu}/>
    {:else}
      <RedTemplate getImageUrl={getImageUrl} menu={menu}/>
    {/if}
  {/if}