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



export const Button = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: var(--white);
  border: none;
  padding: 1.5rem 3rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--font-lg);
  position: relative;
  display: inline-block;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--black);
  text-transform: uppercase;
  letter-spacing: var(--ls-md);

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
