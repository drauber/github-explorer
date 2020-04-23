import { createGlobalStyle } from 'styled-components';

import githubeBackground from '../assets/github-background.svg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #f0f0f5 url(${githubeBackground}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}

border-style, input, button {
  font: 16px Roboto, sans-serif
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}
`;
