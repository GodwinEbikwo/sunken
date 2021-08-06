import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  padding-bottom: var(--spacer-half);
  margin-left: auto;
  margin-right: auto;
  
  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  &.has-mw {
     max-width: var(--max-width); 
  }

  @media (min-width: 800px) {
    padding-top: var(--spacer-double);
  }
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}


