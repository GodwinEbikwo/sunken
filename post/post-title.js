import styled from 'styled-components';

export default function PostTitle({ children }) {
  return <PostT>{children}</PostT>;
}

const PostT = styled.h1`
  font-weight: var(--font-lg);
  text-align: center;
  line-height: 1;
  letter-spacing: var(--ls-md);
  margin-bottom: var(--golden-ratio);
  text-transform: uppercase
`;
