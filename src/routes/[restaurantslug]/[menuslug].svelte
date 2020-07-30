<script context="module">
  export async function preload({ params }) {
    let { menuslug } = params;
    return { menuslug };
  }
</script>

<script>
  import Brown4Images from "../../components/menu/brown4images.svelte";
  import DarkTemplate from "../../components/menu/darktemplate.svelte";
  import WhiteTemplate from "../../components/menu/whitetemplate.svelte";
  import RedTemplate from "../../components/menu/redtemplate.svelte";
  import { getImageUrl, fetchData } from "../../utils/api.js";
  import { theme } from "../../utils/theme.js";

  import { onMount } from "svelte";
  export let menuslug;
  let menu;
  let template;
  let fetch = true;
  onMount(async () => {
    const data = await fetchData(menuslug);
    menu = data.menu;
    menu.categorias = menu.categorias.filter(c => c.activo);
    const { configuracion, fondo, imagenes } = menu.menus_template;
    console.log("TEMA", menu.menus_template);
    template = menu.menus_template.template;
    fetch = false;
    const colors = ["green", "red", "yellow", "blue", "purple"];
    theme.updateTheme({
      color: colors[template],
      config: configuracion,
      template,
      fondo,
      imagenes
    });
  });
</script>

{#if fetch}
  <p>Fetching...</p>
{:else}
  {#if template === 1}
    <Brown4Images {getImageUrl} {menu} />
  {:else if template === 2}
    <DarkTemplate {getImageUrl} {menu} />
  {:else if template === 3}
    <WhiteTemplate {getImageUrl} {menu} />
  {:else if template === 4}
    <RedTemplate {getImageUrl} {menu} />
  {:else}
    <RedTemplate {getImageUrl} {menu} />
  {/if}
{/if}
