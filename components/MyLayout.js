import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#222'
});

const backgroundText = theme('mode', {
  dark: '#fff',
  light: '#222'
});

const backgroundLink = theme('mode', {
  dark: 'lightgreen',
  light: 'orange'
});

const AppWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 50vh;
  padding: 40px;
  padding-bottom: 0;
  margin: 0 40px;
  border: 1px solid #ddd;
  color: ${backgroundText};
  background-color: ${backgroundColor};
  a {
    color: ${backgroundLink};
    text-decoration: none;
  }

  & > * {
    flex: 1 100%;
  }
`;

const AppSection = styled.section`
  padding: 0 20px;
`;

const customTheme = { mode: 'light' };

const Layout = props => (
  <Fragment>
    <GlobalStyle theme={customTheme} />
    <ThemeProvider theme={customTheme}>
      <AppWrapper>
        <Header />
        <AppSection>{props.children}</AppSection>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  </Fragment>
);

export default Layout;
