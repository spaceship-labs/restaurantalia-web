import { css } from 'emotion';

const getMaskStyles = (image) => css`
  mask-image: url(${image});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${image});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

const circle = css`
  border-radius: 100%;
  width: 120px;
  height: 120px;
  background-color: #fff;
  @media (min-width: 1200px) {
    width: 160px;
    height: 160px;
  }
`;

const getDots = (template) => {
  if (template !== 3 || template !== 4) {
    return css`
      float: left;
      width: 0;
      white-space: nowrap;
      content: ". . . . . . . . . . . . . . . . . . . . "
        ". . . . . . . . . . . . . . . . . . . . "
        ". . . . . . . . . . . . . . . . . . . . "
        ". . . . . . . . . . . . . . . . . . . . ";
    `
  }
  return '';
}

const CustomStyles = (theme) => {
  const { template, config } = theme;
  const { dishes: {
    color,
    backgroundColor,
    font,
    weightTitle,
    colorTitle }
  } = config;
  const redMargins = {
    l: css`margin-right: 15%;`,
    r: css`margin-left: 18%;`,
    s: css`
      margin-left: 20%;
      max-width: 65%;
      @media (min-width: 1200px) {
        min-width: 86%;
      }
    `,
  }
  return {
    dishContainer: css`
      padding: 5px 20px;
      color: ${color};
      font-family: ${font};
      font-size: 1em;
    `,
    dishContainerRed: (direction) => css`
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      ${redMargins[direction]}
    `,
    container: css`
      width: 95%;
      background-color: ${backgroundColor};
      border-radius: 0.5em;
      max-width: 80%;
      padding: 5px 11%;
      margin-left: 5%;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (min-width: 1200px) {
        max-width: 50%;
      }
    `,
    title: css`
      font-size: 1em;
      margin: 0;
      li{
        font-weight: ${weightTitle || 700};
        font-family: ${font};
        color: ${colorTitle || color};
      }
    `,
    titleRed: css` 
      font-size: 1em;
      margin: 0;
      font-weight: ${weightTitle || 700};
      font-family: ${font};
      color: ${colorTitle || '#ffffff'};
    `,
    details: css`
      max-width: 40em;
      padding: 0;
      overflow-x: hidden;
      list-style: none;
      font-size: 1em;
      padding-left: 22px;
    `,
    detailsRed: css`
      display: flex;
      flex-direction: column;
    `,
    detailsElement: css`
      display: flex;
      align-items: flex-end;
    `,
    description: css`
      padding-right: 0.33em;
      flex: 1;
      font-weight: 400;
      font-family: ${font};
      &::after{
        ${getDots(template)}
      }
    `,
    descriptionRed: css`
      p{
        font-family: ${font};
        color: ${color};
        font-weight: 300;
        margin: 0;
      }
    `,
    price: css`
      float: right;
      padding-left: 0.33em;
      font-size: 1em;
      font-weight: 600;
      position: relative;
      z-index: 1;
      font-family: ${font};
    `,
    priceRed: css`
      p{
        margin: 0;
        font-family: ${font};
        font-size: 1em;
        font-weight: 600;
        color: ${color};
      }
    `,
    dots: css`
      border-bottom: 2px dotted;
      flex: 1;
      margin: 0 5px;
    `,
    leftDishPad: css`
      padding-left: 3%;
      padding-right: 25%;
    `,
    rightDishPad: css`
      padding-right: 15%;
      padding-left: 10%;
    `,
    imageRight: css`
      position: relative;
      right: 10%;
      img {
        ${circle}
        ${getMaskStyles("/images/Mancha_der.png")}
      }
    `,
    imageLeft: css`
      position: relative;
      left: 10%;
      img {
        ${circle}
        ${getMaskStyles("/images/Mancha_izq.png")}
      }
    `,
  }
};

export default CustomStyles;
