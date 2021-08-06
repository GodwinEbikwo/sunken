import styled from 'styled-components';
import Link from 'next/link';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import FancyLink from './fancyLink';
import FancySpan from './fancySpan';
import Menu, { Burger } from './menu';
import { useState } from 'react';

const navLogoReveal = {
  initial: { y: '-110%' },
  enter: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '100%',
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.08, delay: 0.2 } },
        }}>
        <Header>
          <Nav>
            <NavList>
              <li>
                <FancySpan>
                  <m.span
                    variants={navLogoReveal}
                    className="block">
                    <FancyLink
                      destination="/projects"
                      a11yText="Navigate to the contact page"
                      label="Projects"
                      className="link link--metis"
                    />
                  </m.span>
                </FancySpan>
              </li>
            </NavList>
          </Nav>

          <Logo>
            <Link href="/" passHref>
              <a aria-label="Sunken Interior logo">
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    S.
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </Logo>

          <CartContainer>
            <FancySpan>
              <m.div variants={navLogoReveal} className="block">
                <Burger open={open} setOpen={setOpen} />
              </m.div>
            </FancySpan>
          </CartContainer>
        </Header>
        <Menu open={open} setOpen={setOpen} />
      </m.div>
    </LazyMotion>
  );
}

export const Header = styled.header`
  padding: var(--golden-ratio);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 11.733vw;
  width: 100%;

  @media (min-width: 768px) {
    position: fixed;
    top: calc(var(--golden-ratio) - 5px);
    left: var(--spacer);
    right: var(--spacer);
    z-index: 100;
    padding: 0;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 16.806vw 20vw 16.806vw;
    grid-template-areas: 'nav logo cart';
    width: calc(100vw - var(--spacer-double));
    height: unset;
    background: none;
    mix-blend-mode: difference;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-area: nav;
  text-transform: uppercase;
  font-weight: var(--font-md);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 10.764vw;

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
`;

export const Logo = styled.div`
  text-align: center;
  grid-area: logo;
  font-family: var(--font);
  font-size: 3rem;
  font-weight: var(--font-lg);
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: cart;
  font-weight: var(--font-md);

  & > {
    button {
      cursor: pointer;
    }
  }
`;
