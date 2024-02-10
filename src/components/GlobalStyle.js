import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
  }
body {
    background-color: #f1f3fb;
}
main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    margin-bottom: 30px;
  }
h1,h2 {
	font-size: 1.75rem;
	font-weight: 700;
	color: #6658d3;
	line-height: 1.222;
}

`;
