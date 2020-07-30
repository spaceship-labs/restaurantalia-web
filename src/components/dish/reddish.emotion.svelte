<script>
  import { formatDescription } from "../../utils/format";
  export let dish;
  export let imagePosition;
  export let getImageUrl;

  import CustomStyles from "./index.styled.js";
  import { theme } from "../../utils/theme.js";
  const {
    dishContainerRed,
    container,
    titleRed,
    detailsRed,
    descriptionRed,
    priceRed,
    imageLeft,
    imageRight
  } = CustomStyles($theme);
  const imageDirection = dish.imagen
    ? imagePosition === "left"
      ? "l"
      : "r"
    : "s";
  const dishClass = dishContainerRed(imageDirection);
</script>

<div class={dishClass}>
  {#if imagePosition === 'left' && dish.imagen}
    <div class={imageLeft}>
      <img alt="plc" src={getImageUrl(dish.imagen)} />
    </div>
  {/if}
  <div class={container}>
    <h4 class={titleRed}>{dish.nombre}</h4>
    <div class={detailsRed}>
      <div class={descriptionRed}>
        <p>{formatDescription(dish) || ''}</p>
      </div>
      <div class={priceRed}>
        <p>${dish.precio}</p>
      </div>
    </div>
  </div>
  {#if imagePosition === 'right' && dish.imagen}
    <div class={imageRight}>
      <img src={getImageUrl(dish.imagen)} />
    </div>
  {/if}
</div>
<!-- dish end -->
