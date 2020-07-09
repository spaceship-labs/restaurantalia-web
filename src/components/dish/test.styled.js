import { css } from 'emotion';
// import { theme } from "../../utils/api.js"

const CustomStyles = (theme) => ({
  description: css`
      color: ${theme.color};
      font-size: 5em;
    `,
});

export default CustomStyles;
