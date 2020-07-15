import { css } from 'emotion';
import { getImageUrl } from "../../utils/api";

const getImageBg = (theme) => {
  const { config, fondo } = theme;
  const {
    background: { colorBackground, type, size },
  } = config;
  return css`
    ${colorBackground ? `background-color:${colorBackground};` : ''}
    ${ type === 'image' && fondo ? `background-image:url(${getImageUrl(fondo)});` : ''}
    background-size: ${ size || 'cover'};
    background-attachment: fixed;
  `
};

const colBorder = css`
  &:nth-child(1){
    border-right: 2px solid #000;
  }
`;

const CustomStyles = (theme) => {
  const { template, config, fondo } = theme;
  const {
    background: { colorContainer },
    general: { color, fontTitle, sizeTitle }
  } = config;

  return {
    menuWrapp: css`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2.5% 0;
      flex: 1;
      ${getImageBg(theme)}
    `,
    menuDark: css`
      padding: 80px 0;
      @media (min-width: 750px){
        padding: 30px 0;
      }
    `,
    lightMenu: css`
      padding: 80px 0;
      @media (min-width: 750px){
        padding: 30px 0;
      }
    `,
    redMenu: css`
      padding: 40px 0;
      @media (min-width: 1000px){
        padding: 30px 0;
      }
    `,
    title: css`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 15px 10% 0px 10%;
      font-size: ${sizeTitle || "1.5em"};
      font-family: ${fontTitle || "1.5em"};
      color: ${color};
      &:before,
      &:after {
        content: "●●●";
        font-size: 0.5em;
        padding: 0 0.5em;
      }
      @media (min-width: 750px){
        font-size: 2em;
      }
    `,
    titleRemoveDots: css`
      &:before,
      &:after{
        display:none;
      }
    `,
    titleDark: css`
      margin: 15px 10% 25px;
    `,
    titleBrown: css`
      text-align: left;
      margin: 15px 10% 25px;
      z-index: 1;
      @media (min-width: 750px){
        text-align: center;
      }
    `,
    titleImage: css`
      position: absolute;
      top: -30px;
      right: -10px;
      max-width: 200px;
      z-index: 0;
      @media (min-width: 750px){
        display: none;
      }
    `,
    titleSeparator: css`
      border-top: solid 2px #000;
      margin: 10px 2%;
    `,
    titleRedSeparator: css`
      margin: 10px 2%;
    `,
    container: css`
      ${colorContainer ? `background-color:${colorContainer};` : ''}
      max-width: 95%;
      width: 100%;
    `,
    content: css`
      padding: 15px 25px;
      margin: 0 2%;
      display: flex;
    `,
    whiteContent: css`
      padding: 0px 0px 15px 0;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (min-width: 1100px){
        column-count: 3;
      }
    `,
    darkContent: css`
      border-top: 1px solid ${color};
      margin: 0;
      padding: 15px 0px;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (min-width: 1100px){
        column-count: 3;
      }
    `,
    lightContent: css`
      margin: 0;
      @media (min-width: 750px){
        padding: 15px 0px;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `,
    redContent: css`
      padding: 0px 0px 15px 0;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (min-width: 1100px){
        column-count: 3;
      }
    `,
    col: (haveBorder) => css`
      min-width: 100%;
      flex: 1 0 100%;
      box-sizing: border-box;
      @media (min-width: 750px){
        min-width: 50%;
        flex: 1 0 50%;
        ${haveBorder ? colBorder : ''}
      }
    `,
    col3: css`
      @media (min-width: 750px){
        min-width: 40%;
        flex: 1 0 40%;
        padding: 0 30px;
        box-sizing: border-box;
      }
      @media (min-width: 1100px){
        min-width: 30%;
        flex: 1 0 30%;
        max-width: 30%;
      }
    `
  }
};

export default CustomStyles;
