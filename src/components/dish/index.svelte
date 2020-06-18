<script>
  export let dish
</script>
<div class="dish">
  <h4>{dish.Nombre}</h4>
  <div class="details">
    <div class="description">
      <p>{dish.Descripcion||""}</p>
    </div>
    <div class="fill"></div>
    <div class="price">
      <p>${dish.Precio}</p>
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
</style>