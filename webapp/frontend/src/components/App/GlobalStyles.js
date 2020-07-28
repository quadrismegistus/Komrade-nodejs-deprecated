import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

/**
 * Global styles for the application
 */
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

  @font-face {
    font-family: 'Strengthen';
    src: url('fonts/Strength.ttf');
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    //font-family: open sans;
    font-family: ${theme.font.family};

    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.body};
    background-image: url('/vectorstock_20796022 (copy).png');
    // background-image: url('/Hammer_and_sickle.svg');
  }

  #root {
    position: relative;
    min-height: 100vh;
  }
`;
