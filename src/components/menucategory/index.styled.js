import { css } from 'emotion';

const getExtraWrapp = (template) => {
  const extraStyles = {
    1: css`
      padding: 10px 0;
    `,
    2: css`
      padding: 10px 0;
    `,
    4: css`
      padding: 10px 0;
    `,
  }
  return extraStyles[template] ? extraStyles[template] : '';
}

const getExtraTitle = (template) => {
  const extraStyles = {
    3: css`
      text-transform: uppercase;
      padding: 5px 25px;
      border: 2px solid #000;
      border-left: 0;
      border-right: 0;
    `,
    4: css`
      font-size: 2em;
      flex-grow: 0;
      font-family: "Yellowtail", cursive;
      margin-bottom: 15px;
    `,
  }
  return extraStyles[template] ? extraStyles[template] : '';
}

const getStylePosition = (position) => {
  if (position === 'image-position-left') {
    return css`
      img{
        mask-image: url("/images/Mancha_izq.png");
        -webkit-mask-image: url("/images/Mancha_izq.png");
        @media (min-width: 1100px){
          position: absolute;
          top: 0%;
          right: 100%;
        }
      }
    `
  }
  if (position === 'image-position-top') {
    return css`
      img{
        mask-image: url("/images/Mancha_der.png");
        -webkit-mask-image: url("/images/Mancha_der.png");
        @media (min-width: 750px) AND (max-width: 1099px){
          position: relative;
          margin-top: -180px;
          left: 150px;
          max-width: 100%;
        }
        @media (min-width: 1100px){
          position: absolute;
          bottom: 80%;
          right: 90%;
        }
      }
    `
  }
  if (position === 'image-position-top2') {
    return css`
      img{
        position: absolute;
        bottom: 80%;
        right: 90%;
        mask-image: url("/images/Mancha_der.png");
        -webkit-mask-image: url("/images/Mancha_der.png");
        @media (min-width: 1100px){
          position: absolute;
          bottom: 80%;
          left: 70%;
        }
      }
    `
  }
  return css`
      img{
        mask-image: url("/images/Mancha_der.png");
        -webkit-mask-image: url("/images/Mancha_der.png");
      }
    `
}

const CustomStyles = (theme) => {
  const { template, config } = theme;
  const { categories: { font, color } } = config;

  return {
    catWrapper: css`
      padding: 0;
      position: relative;
      ${getExtraWrapp(template)}
      img{
        max-width: 90%;
        display: block;
        margin: 10px auto;
        @media (min-width: 1100px){
          max-width: 280px;
          margin: 20px auto;
        }
      }
    `,
    title: css`
      font-family: ${font};
      font-size: 1.5em;
      margin: 0;
      margin-bottom: 15px;
      color: ${color};
      padding-left: 15px;
      ${getExtraTitle(template)}
    `,
    titleColumnPadding: (column) => css`
      padding-left: 15px;
      ${template === 3 ? (column == 0 ? 'padding-left: 3%;' : 'padding-left: 10%;') : ''}
    `,
    titleWrapper: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 80%;
    `,
    descColumnPadding: (column) => css`
      padding-left: 15px;
      ${template === 3 ? (column == 0 ? 'padding-left: 3%;' : 'padding-left: 10%;') : ''}
    `,
    descriptionSimple: css`
      color: ${color};
    `,
    description: (side) => css`
      font-family: ${font};
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8em;
      ${redMargins[direction]}
    `,
    imageCatWrapp: (position) => css`
      ${getStylePosition(position)}
      img{
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
      }
    `,
    divider: css`
      flex-grow: 1;
      height: 1px;
      margin-left: 10px;
      background-color: #f9cd82;
    `,
  }
};

export default CustomStyles;
