<svelte:head>
  <title>Restaurantalia</title>
</svelte:head>

<div class="lines lines-l"></div>
<div class="lines lines-r"></div>
<div class="header">
  <img alt="Restaurantalia" src="images/restaurantalia_logo.PNG" />
</div>
<section>
  <div class="container">
    <a href="mailto:admin@spaceshiplabs.com" class="button">Quiero mi menu</a>
    <h2>PRECIO DE LANZAMIENTO</h2>
    <p class="small-price"><span>$5,800</span> mxn <b>(35% de descuento)</b></p>
    <h3 class="big-price"><span>$3,770</span> mxn <b>(35% de descuento)</b></h3>
    <p><b>$315 pesos mensuales</b></p>
    <p>Aceptamos pagos a 3, 6 y 12 meses sin intereses.</p>
  </div>
  <img alt="" src="images/hand.PNG" />
</section>

<style>
  :global(#sapper) {
    background-color: #eb796e;
  }

  .lines {
    position: absolute;
    width: 220px;
    height: 140px;
    z-index: 0;
  }

  .lines-r {
    background: transparent url('/images/lines_r.PNG') no-repeat center;
    right: 40px;
    top: 85%;
  }

  .lines-l {
    background: transparent url('/images/lines_l.PNG') no-repeat center;
    left: 10px;
    top: 200px;
  }

  .header {
    position: relative;
    width: 90%;
    max-width: 620px;
    padding: 30px 15px 70px;
    background: transparent url('/images/white.PNG') no-repeat center bottom;
    background-size: 100%;
    z-index: 1;
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
    font-size: 1.7em;
    padding: 15px 30px;
    background-color: #eb796e;
    color: #fff;
    border: 2px solid #fff;
    transition: all .3s;
    cursor: pointer;
    text-decoration: none;
  }

  .button:hover {
    color: #eb796e;
    background-color: #fff;
  }

  h2 {
    font-size: 2.1em;
    color: #f5c69c;
  }

  .small-price span {
    font-size: 1.5em;
    text-decoration: line-through;
    text-decoration-color: #f06256;
  }

  .big-price {
    font-size: 1.1em;
  }

  .big-price span {
    font-size: 2em;
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

    .button {
      font-size: 2em;
    }

    h2 {
      font-size: 2.8em;
    }

    .small-price {
      font-size: 1.2em;
    }

    .small-price span {
      font-size: 2em;
    }

    .big-price {
      font-size: 1.5em;
    }

    .big-price span {
      font-size: 2.4em;
    }
  }

  @media (min-width: 1100px) {
    section>img {
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
  }
</style>