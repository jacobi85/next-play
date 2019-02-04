import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const linkStyle = {
  marginRight: 15
};

const rotate360 = keyframes`
 from {
   transfrom: rotate(0deg);
 }
 to {
   transform: rotate(360deg);
 }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const HeaderNavigation = styled.nav`
  display: flex;
  align-self: start;
  align-items: start;
`;

 const HeaderLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinte 1.5s linear;
  }
`; 
//  <HeaderLogo src={require('../static/logo.png')} />

const HeaderNavigationLink = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  cursor: pointer;

  &:hover {
    color: tomato;
    border-color: tomato;
  }
`;

const HeaderNavigationLinkSecondary = styled(HeaderNavigationLink)`
  color: lightblue;
  border-color: lightblue;
`;

const Header = () => (
  <HeaderWrapper>
  <HeaderLogo src={require('../static/logo.png')} />
    <HeaderNavigation>
      <Link prefetch href="/">
        <HeaderNavigationLink style={linkStyle}>Home</HeaderNavigationLink>
      </Link>
      <Link prefetch href="/about">
        <HeaderNavigationLinkSecondary style={linkStyle}>
          About
        </HeaderNavigationLinkSecondary>
      </Link>
    </HeaderNavigation>
  </HeaderWrapper>
);

export default Header;
