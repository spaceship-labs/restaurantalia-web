<script>
  import { formatDescription } from "../../utils/format";
  export let dish;
  export let column;
  export let imagePosition;
  export let getImageUrl;

  import CustomStyles from './index.styled.js';
  import { theme } from "../../utils/theme.js"
  const {
    dishContainer,
    title,
    details,
    detailsElement,
    description,
    price,
    dots,
    leftDishPad,
    rightDishPad,
  } = CustomStyles($theme);
  const columnClass = column ? (column == 0 ? leftDishPad : rightDishPad) : '';
</script>

<div class="{dishContainer} {columnClass}">
  <h4 class="{title}">
    <li>{dish.nombre}</li>
  </h4>
  <ul class={details}>
    <li class={detailsElement}>
      <span class={description}>
        {formatDescription(dish) || ''}
      </span>
      <span class={price}>${dish.precio}</span>
    </li>
  </ul>
</div>
<!-- dish end -->