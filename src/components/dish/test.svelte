<script>
  import { onMount } from "svelte";
  import { formatDescription } from "../../utils/format";
  export let dish;
  import CustomStyles from './test.styled.js';
  const { description } = CustomStyles();

</script>

<style>
  ul.details {
    max-width: 40em;
    padding: 0;
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
  }

  ul.details span+span {
    float: right;
    padding-left: 0.33em;
    font-size: 1em;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  .dish {
    padding: 5px 20px;
  }

  .dish h4 {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }

  span {
    padding: 0 3px;
  }
</style>
<div class="dish">
  <h4 class={description}>{dish.nombre}</h4>
  <ul class="details">
    <li>
      <span>{formatDescription(dish) || ''}</span>
      <span>${dish.precio}</span>
    </li>
  </ul>
</div>
<!-- dish end -->