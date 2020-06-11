<script>
  import Nav from "../components/Nav.svelte"
  import ContactForm from "../components/contactform.svelte"

  let visible = false;
  function toggleVisible() {
    visible = !visible
  }

</script>
<svelte:head>
  <title>Restaurantalia</title>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,400&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="lines lines-l"></div>
<div class="lines lines-r"></div>
<div class="header">
  <div class="dots dotsbig"></div>
  <div class="dots dotssmall"></div>
  <img alt="Restaurantalia" src="images/restaurantalia_logo.PNG" />
</div>
<section>
  <div class="container">
    <a on:click={toggleVisible} class="button">Quiero mi menú</a>
    <br />
    <h2>PRECIO DE LANZAMIENTO</h2>
    <p class="small-price"><span>$5,800</span> mxn anual</p>
    <h3 class="big-price"><span>$3,770</span> mxn <b>(35% de descuento)</b></h3>
    <p class="small-text"><b>$315 pesos mensuales</b></p>
    <p class="small-text">Aceptamos pagos a 3, 6 y 12 meses sin intereses.</p>
  </div>
  <img class="hand" alt="" src="images/hand.png" />
</section>
<Nav />
{#if visible}
<ContactForm toggle={toggleVisible} />
{/if}

<style>
  :global(#sapper) {
    background-color: #eb796e;
  }

  :global(html, body, span, a, button, div, h1, h2) {
    font-family: 'Ubuntu', sans-serif;
  }

  .lines {
    position: absolute;
    width: 220px;
    height: 140px;
    z-index: 0;
  }

  .lines-r {
    background: transparent url('../images/lines_r.PNG') no-repeat center;
    right: 40px;
    top: 85%;
  }

  .lines-l {
    background: transparent url('../images/lines_l.PNG') no-repeat center;
    left: 10px;
    top: 200px;
  }

  .header {
    position: relative;
    width: 90%;
    max-width: 620px;
    padding: 30px 15px 70px;
    background: transparent url('../images/white.PNG') no-repeat center bottom;
    background-size: 100%;
    z-index: 1;
  }

  .dots {
    position: absolute;
    top: 10px;
    z-index: 0;
  }

  .dots.dotsbig {
    width: 304px;
    height: 318px;
    background: transparent url('../images/dots_big.PNG') no-repeat center;
    right: 80%;
  }

  .dots.dotssmall {
    width: 140px;
    height: 104px;
    background: transparent url('../images/dots_small.PNG') no-repeat center;
    left: 90%;
  }

  .header img {
    display: block;
    margin: 0 auto;
    max-width: 90%;
  }

  section {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .container {
    width: 90%;
    max-width: 900px;
    text-align: center;
    color: #fff;
  }

  .button {
    display: inline-block;
    font-size: 2.4em;
    font-weight: bold;
    padding: 15px 30px;
    background-color: #eb796e;
    color: #fff;
    border: 2px solid #fff;
    transition: all .3s;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Amatic SC', cursive;
  }

  .button:hover {
    color: #eb796e;
    background-color: #fff;
  }

  h2 {
    font-size: 3em;
    color: #f5c69c;
    margin-bottom: 0;
    font-weight: bold;
    font-family: 'Amatic SC', cursive;
  }

  .small-price {
    margin: 20px 0;
  }

  .small-price span {
    font-size: 1.5em;
    text-decoration: line-through;
    text-decoration-color: #f06256;
  }

  .big-price {
    font-size: 1.1em;
    margin-top: 0;
    font-weight: normal;
  }

  .big-price span {
    font-size: 2em;
  }

  .small-text {
    font-size: .8em;
    margin: 10px 0;
  }

  .hand {
    max-width: 50%;
  }

  @media (min-width: 650px) {
    .header {
      padding: 30px 15px 130px;
    }

    .lines-l {
      top: 3%;
    }

    .lines-r {
      top: 45%;
    }

    :global(html) {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1100px) {
    :global(html) {
      font-size: 1.4em;
    }

    .hand {
      position: absolute;
      left: 3%;
      bottom: 0px;
      max-width: 30%;
    }
  }

  @media (min-width: 1500px) {
    .header {
      max-width: 900px;
    }

    .header img {
      width: 400px;
    }

    .hand {
      left: 5%;
    }
  }

  @media (min-width: 2000px) {
    :global(html) {
      font-size: 1.6em;
    }

    .hand {
      max-width: 30%;
    }
  }
</style>