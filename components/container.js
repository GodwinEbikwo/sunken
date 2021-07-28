import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  margin-top: var(--spacer);
  padding-top: var(--spacer-double);
  padding-bottom: var(--spacer-half);
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;

  &.has-px {
    padding-left: var(--spacer);
    padding-right: var(--spacer);
  }

  @media (max-width: 1024px) {
    padding-top: 13vw;
  }
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}
