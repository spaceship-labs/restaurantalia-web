<script>
  import { formatDescription } from "../../utils/format";
  export let dish;
  export let column;
</script>

<style>
  ul.details {
    max-width: 40em;
    padding: 0;
    padding-left: 5%;
    overflow-x: hidden;
    list-style: none;
    font-size: 1em;
  }
  ul.details li:after {
    float: left;
    width: 0;
    white-space: nowrap;
    content: ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . ";
  }
  ul.details span:first-child {
    padding-right: 0.33em;
    background: #f0efed;
  }
  ul.details span + span {
    float: right;
    padding-left: 0.33em;
    font-size: 1em;
    font-weight: 600;
    background: #f0efed;
    position: relative;
    z-index: 1;
  }

  .dish {
    padding: 5px 20px;
  }
  .leftDishPad {
    padding-left: 3%;
    padding-right: 25%;
  }
  .rightDishPad {
    padding-right: 15%;
    padding-left: 10%;
  }
  .dish h4 {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }
</style>

<div class="dish {column == 0 ? 'leftDishPad' : 'rightDishPad'}">
  <h4>
    <li>{dish.nombre}</li>
  </h4>
  <ul class="details">
    <li>
      <span>{formatDescription(dish) || ''}</span>
      <span>${dish.precio}</span>
    </li>
  </ul>
</div>
<!-- dish end -->
