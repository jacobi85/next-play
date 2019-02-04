import styled from 'styled-components';

const AppFooter = styled.footer`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  background-color: lightgray;
`;

export default () => (
  <AppFooter>
    <p>this is the footer</p>
  </AppFooter>
);
