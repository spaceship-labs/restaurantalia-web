<script>
  import Category from "../components/menucategory/category.svelte"
</script>
<svelte:head>
  <title>Demo | Restaurantalia</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<section class="menu dark-menu">
  <div class="container">
    <div class="logo">
      <img alt="restaurant name" src="../images/logo_black.PNG" />
    </div>
    <h1>MENU</h1>
    <img class="title-image" alt="restaurant name" src="../images/dish1.PNG" />
    <div class="menu-content">
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  </div>
</section>

<style>
  :global(html, body, span, a, button, div, h1, h2) {
    font-family: 'Oswald', sans-serif;
  }

  .menu {
    color: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
    flex: 1;
  }

  .dark-menu {
    background-color: #000;
    color: #fff;
  }

  .menu .logo {
    text-align: center;
    margin: 0px 10%;
  }

  .menu .logo img {
    max-width: 160px;
    position: relative;
    z-index: 1;
  }

  .menu h1 {
    text-align: center;
    font-size: 2em;
    margin: 15px 10% 25px;
  }

  .menu-content {
    padding: 15px 25px;
    /* column-count: 1;
  column-rule-style: none; */
  }

  .menu.dark-menu .menu-content {
    border-top: 1px solid;
  }

  .title-image {
    position: absolute;
    top: -60px;
    right: -30px;
    max-width: 300px;
    z-index: 0;
  }

  @media (min-width: 750px) {
    .menu {
      padding: 30px 0;
    }

    .title-image {
      display: none;
    }

    .menu.dark-menu .menu-content {
      padding: 30px;
      column-count: 2;
      column-gap: 20px;
      /* display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    align-items: start;
    grid-column-gap: 70px; */
    }
  }

  @media (min-width: 1100px) {

    .menu.dark-menu .menu-content {
      column-count: 3;
      column-gap: 60px;
      /* grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-column-gap: 60px; */
    }
  }

  @media (min-width: 1400px) {
    .menu-content {
      grid-column-gap: 200px;
      /* column-gap: 200px; */
    }
  }
</style>