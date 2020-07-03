<script>
  import { formatDescription } from '../../utils/format';
  export let dish
</script>
<div class="dish">
  <h4>{dish.nombre}</h4>
  <div class="details">
    <div class="description">
      <p><span>{formatDescription(dish)||""}</span></p>
    </div>
    <div class="spacer"/>
    <div class="price">
      <p><span>${dish.precio}</span></p>
    </div>
  </div>
  <div class="fill"></div>
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
  .spacer{
    min-width: 20px;
  }
  span {
    background-color:#000;
    padding: 0 3px;  
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

  .fill {
    z-index:-1;
    border-bottom: 1px dotted;
    flex: 1;
    min-width: 20px;
    margin-top: -.4em;
  }
  @media(min-width:1200px){
    .fill {
      border-bottom: 2px dotted;
      flex: 1;
      min-width: 20px;
    }
  }
  @media(min-width:1500px){
    .fill {
      border-bottom: 3px dotted;
      flex: 1;
      min-width: 20px;
    }
  }
</style>