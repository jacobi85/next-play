import { Fragment } from 'react';
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import styled from 'styled-components';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Title = styled.h1`
color: ${props => props.theme.title};
font-size: large;
`;

Title.defaultProps = {
  theme: {
    title: "palevioletred"
  }
}

export default () => (
  <Layout>
    <Title>Adventure playground test</Title>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)