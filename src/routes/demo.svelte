<script>
  import Category from "../components/menucategory/demo.svelte";
</script>

<style>
  :global(html, body, span, a, button, div, h1, h2) {
    font-family: "Oswald", sans-serif;
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

  .light-menu {
    background-color: #fff3e2;
    background: #fff3e2 url("../images/bg_phone.JPG") no-repeat top center;
    background-size: cover;
    background-attachment: fixed;
    color: #735c4a;
  }

  .menu .logo {
    text-align: center;
    margin: 0px 10%;
  }

  .menu.light-menu .logo {
    text-align: left;
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

  .menu.light-menu h1 {
    text-align: left;
    position: relative;
    z-index: 1;
  }

  .menu-content {
    padding: 15px 25px;
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

    .menu.light-menu {
      background-image: url("../images/bg_tablet.JPG");
    }

    .menu.light-menu .menu-content {
      padding: 15px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .column {
      min-width: 40%;
      flex: 1 0 40%;
      padding: 0 30px;
      box-sizing: border-box;
    }
  }

  @media (min-width: 1100px) {
    .menu.light-menu {
      background-image: url("../images/bg_desk.JPG");
    }

    .menu.light-menu .logo,
    .menu.light-menu h1 {
      text-align: center;
    }

    .column {
      min-width: 30%;
      flex: 1 0 30%;
      max-width: 30%;
    }
  }
</style>

<svelte:head>
  <title>Demo | Restaurantalia</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<section class="menu light-menu">
  <div class="container">
    <div class="logo">
      <img alt="restaurant name" src="../images/logo_black.PNG" />
    </div>
    <h1>MENU</h1>
    <img class="title-image" alt="restaurant name" src="../images/dish1.PNG" />
    <div class="menu-content">
      <div class="column">
        <Category />
        <Category
          imageposition="image-position-left"
          imageurl="../images/dish3.PNG" />
        <Category />
      </div>
      <div class="column">
        <Category
          imageposition="image-position-top"
          imageurl="../images/dish1.PNG" />
        <Category imageurl="../images/dish1.PNG" />
      </div>
      <div class="column">
        <Category
          imageposition="image-position-top2"
          imageurl="../images/dish2.PNG" />
        <Category />
        <Category />
      </div>
    </div>
  </div>
</section>
