<script>
  import { getImageUrl } from "../../utils/api";
  export let logo;
  export let margin;
</script>

<style>
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ml {
    justify-content: flex-start !important;
    margin-left: 20px;
  }
  .logo img {
    max-width: 250px;
    position: relative;
    z-index: 1;
  }
  @media (min-width: 750px) {
    .ml {
      margin-left: 10%;
      justify-content: center !important;
    }
    .logo img {
      max-width: 300px;
    }
  }
  @media (min-width: 1100px) {
    .logo img {
      max-width: 380px;
    }
  }
</style>

{#if logo}
  <div class="logo {margin == 'left' ? 'ml' : ''}">
    <img alt="restaurant name" src={getImageUrl(logo)} />
  </div>
{/if}
