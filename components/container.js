import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  padding-bottom: var(--spacer-half);
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;

  &.has-px {
    padding-left: var(--spacer);
    padding-right: var(--spacer);
  }

  @media (min-width: 800px) {
    padding-top: var(--spacer-double);
  }
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}
