import { Global, css } from '@emotion/react';

import { fonts } from './styles/fonts';
import { theme } from './styles/theme';
import { themeToCSSVars } from './utils/themeToCSSVars';

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

const globalStyles = css`
  ${fonts}

  :root {
    ${Object.entries(themeToCSSVars(theme.colors, 'color'))
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}

    ${Object.entries(themeToCSSVars(theme.size, 'size'))
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    padding: 0;
    background-color: transparent;
    border: none;
    line-height: 1.1;
  }

  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  textarea:not([rows]) {
    min-height: 10em;
  }

  :target {
    scroll-margin-block: 5ex;
  }
`;
