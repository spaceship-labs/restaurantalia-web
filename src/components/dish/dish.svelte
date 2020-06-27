<script>
  export let dish
</script>
<div class="dish">
  <h4>{dish.nombre}</h4>
  <div class="details">
    <div class="description">
      <p>{dish.descripcion||""}</p>
    </div>
    <div class="fill"></div>
    <div class="price">
      <p>${dish.precio}</p>
    </div>
  </div>
</div><!-- dish end -->

<style>
  .dish {
    padding: 5px 20px;
  }

  .dish h4 {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }

  .dish p {
    margin: 0;
    font-weight: 300;
  }

  .dish .details {
    display: flex;
    align-items: flex-end;
  }

  .dish .details .description {
    font-size: 1em;
  }

  .dish .details .price p {
    font-size: 1em;
    font-weight: 600;
  }

  .dish .details .fill {
    border-bottom: 1px dotted;
    flex: 1;
    min-width: 20px;
  }
  @media(min-width:1200px){
    .dish .details .fill {
      border-bottom: 2px dotted;
      flex: 1;
      min-width: 20px;
    }
  }
  @media(min-width:1500px){
    .dish .details .fill {
      border-bottom: 3px dotted;
      flex: 1;
      min-width: 20px;
    }
  }
</style>