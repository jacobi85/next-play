import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize};
@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

body {
  background-color: #007586;
  
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
}

p {
  color: ${props => (props.theme.mode === 'light' ? '#333' : 'white')};
}
`;

export default GlobalStyle;
