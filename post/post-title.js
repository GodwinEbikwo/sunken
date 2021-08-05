import styled from 'styled-components';

export default function PostTitle({ children }) {
  return <PostT>{children}</PostT>;
}

const PostT = styled.h1`
  font-family: var(--font);
  font-weight: var(--font-lg);
  text-align: center;
  line-height: 1.25;
  letter-spacing: var(--ls-lg);
  margin-bottom: var(--golden-ratio);
  @media (max-width: 640px) {
    font-size: 4rem;
  }
  
`;
