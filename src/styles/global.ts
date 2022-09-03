import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.colors.blue['light']};
    color: ${({ theme }) => theme.colors.blue['navi']}
  }

  button {
    cursor: pointer;
  }
`;