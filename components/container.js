import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  padding-bottom: var(--spacer-half);
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);

  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  @media (min-width: 800px) {
    padding-top: var(--spacer-double);
  }
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}
