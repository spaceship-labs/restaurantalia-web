<script>
  export let dish
  export let dishImagePosition
</script>

<div class="dish {dishImagePosition==='left'?'l':'r'}" >
  {#if dishImagePosition==='left'}
  <div class="sideImage">
    <img class="circle" alt="plc" src="images/dish1.png"/>
  </div>
  {/if}
  <div class="container">
    <h4>
      {dish.nombre}
    </h4>
    <div class="details">
      <div class="description">
        <p>{dish.descripcion||""}</p>
      </div>
      <div class="price">
        <p>${dish.precio}</p>
      </div>
    </div>
  </div>
  {#if dishImagePosition==='right'}
  <div class="sideImageR">
    <img class="circle" alt="plc" src="images/dish4.png"/>
  </div>
  {/if}
</div><!-- dish end -->

<style>
  .r{
    margin-left:18%;
  }
  .l{
    margin-right:15%;
  }
  .sideImage{
    position: relative;
    left: 10%;
  }
  .sideImageR{
    position: relative;
    right:10%;
  }
  .circle {
    border-radius: 100%;
    width: 160px;
    height: 160px;
  }
  .dish {
    margin-bottom: 10px;
    display:flex;
    flex-direction: row;
    align-items: center;
  }
  .container{
    background-color: #340606;
    border-radius: .5em;
    max-width: 50%;
    padding: 5px 10%;
    margin-left:5%;
    min-height: 100px;
    display:flex;
    flex-direction: column;
    justify-content:center;
  }

  .dish .container h4 {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }

  .dish .container p {
    margin: 0;
    font-weight: 300;
  }

  .dish .container .details {
    display: flex;
    flex-direction: column;
  }

  .dish .container .details .description {
    font-size: 1em;
    color:	#F9CD82 !important;
  }

  .dish .container .details .price p {
    font-size: 1em;
    font-weight: 600;
    color:	#F9CD82 !important;
  }

  .dish .container .details .fill {
    border-bottom: 1px dotted;
    flex: 1;
    min-width: 20px;
  }
  @media(min-width:1200px){
    .dish .container .details .fill {
      border-bottom: 2px dotted;
      flex: 1;
      min-width: 20px;
    }
  }
  @media(min-width:1500px){
    .dish .container .details .fill {
      border-bottom: 3px dotted;
      flex: 1;
      min-width: 20px;
    }
  }
</style>