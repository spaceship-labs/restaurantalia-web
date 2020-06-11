<script>
  import { fade } from 'svelte/transition';
  // export let visible = false
  export let toggle
</script>
<div class="modalContainer visible" transition:fade>
  <div on:click={toggle} class="overlay"></div>
  <div class="content">
    <a class="close" on:click={toggle}>X</a>
    <form action="https://formspree.io/mzbjgvzl" method="POST">
      <img alt="Restaurantalia" src="images/restaurantalia_logo.PNG" />
      <p>
        <label>Nombre:</label>
        <input type="text" name="Nombre" />
      </p>
      <p>
        <label>Restaurante:</label>
        <input type="text" name="Restaurante" />
      </p>
      <p>
        <label>Correo:</label>
        <input type="text" name="Correo" />
      </p>
      <p>
        <label>Teléfono:</label>
        <input type="text" name="Telefono" />
      </p>
      <button type="submit">Enviar</button>
    </form>
  </div>
</div>

<style>
  .modalContainer {
    position: fixed;
    width: 100%;
    min-height: 100%;
    /* min-height: 600px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .modalContainer.visible {
    visibility: visible;
    opacity: 1;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.5);
    padding: 5% 10%;
    max-width: 90%;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 35px;
    display: block;
  }

  .close {
    position: absolute;
    color: #eb796e;
    font-family: 'Amatic SC', cursive;
    font-size: 2em;
    padding: 5px 20px;
    top: 5px;
    right: 5px;
    font-weight: bold;
  }

  p {
    margin: 20px 0;
  }

  label {
    font-size: .8em;
    display: block;
    color: #eb796e;
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #eb796e;
    box-shadow: none;
    background-color: #fff;
    padding: 8px 15px;
    margin-top: 5px;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px 20px;
    border: 2px solid #eb796e;
    background-color: #eb796e;
    color: #fff;
    transition: all .3s;
    cursor: pointer;
    font-size: 1.5em;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #fff;
    color: #eb796e;
  }

  @media (min-width: 1000px) {
    .content {
      padding: 5% 10%;
      min-width: 600px;
    }
  }
</style>