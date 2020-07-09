<script>
  import { onMount } from "svelte";
  import { formatDescription } from "../../utils/format";
  import { theme } from "../../utils/theme";
  export let dish;

  // import { Description } from './test.styled.js';
  import CustomStyles from './test.styled.js';
  console.log("THE<E", theme, theme.color);
  const { description } = CustomStyles(theme);
  // onMount(async () => {
  //   const emotion = await import('emotion/dist/emotion.umd.min.js');
  //   // console.log('EMOTION', emotion)
  //   const { css } = emotion;
  //   // const brand = 'red';
  //   Description = ({ brand }) => css`
  //     color: ${brand || 'blue'};
  //     font-size: 5em;
  //   `;
  // })

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
    background: #fff3e2;
  }

  ul.details span+span {
    float: right;
    padding-left: 0.33em;
    font-size: 1em;
    font-weight: 600;
    background: #fff3e2;
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
    background-color: #fff3e2;
    padding: 0 3px;
  }
</style>
<div class="dish">
  <h4>{dish.nombre}</h4>
  <h3 class={description}>{dish.nombre}</h3>
  <ul class="details">
    <li>
      <span>{formatDescription(dish) || ''}</span>
      <span>${dish.precio}</span>
    </li>
  </ul>
</div>
<!-- dish end -->