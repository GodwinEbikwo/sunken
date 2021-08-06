import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 700;
  line-height: 1;
  letter-spacing: var(--ls-medium);
  margin-bottom: var(--spacer);
`;

export const H2 = styled.h2`
  font-weight: 500;
  line-height: 1;
  letter-spacing: var(--ls-medium);
  margin-bottom: var(--spacer);
`;

export const P = styled.p`
  font-weight: 400;
  margin-bottom: var(--spacer);
`;

export const FooterBox = styled.footer`
  padding-top: var(--golden-ratio);
  text-transform: uppercase;
  font-weight: 500;
`;

export const Button = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 1.5rem 3rem;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: inherit;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
