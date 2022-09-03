import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background[100]};
    color: ${({ theme }) => theme.colors.background[900]};
  }

  button {
    cursor: pointer;
  }
`;