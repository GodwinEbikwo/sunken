import styled from 'styled-components';
import Link from 'next/link';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import FancyLink from './fancyLink';
import FancySpan from './fancySpan';
import Menu from './menu';
import Burger from './burger';
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
      <m.header
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
                  <m.span variants={navLogoReveal} className="block">
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
      </m.header>
    </LazyMotion>
  );
}

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 11.733vw;
  width: 100%;
  padding: var(--golden-ratio);
  z-index: 100;
  background: none;
  mix-blend-mode: difference;
  margin: 0 auto;
  max-width: var(--max-width);

  @media (min-width: 768px) {
    display: grid;
    position: fixed;
    top: calc(var(--golden-ratio) - 5px);
    left: var(--spacer);
    right: var(--spacer);
    padding: 0;
    grid-template-columns: 16.806vw 20vw 16.806vw;
    grid-template-areas: 'nav logo cart';
    width: calc(100vw - var(--spacer-double));
    height: unset;
  }
`;

export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  font-weight: var(--font-sm);
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
  grid-area: logo;
  font-family: var(--font);
  font-size: 3rem;
  font-weight: var(--font-lg);
  text-transform: capitalize;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.125rem;
    margin-left: 8px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: cart;

  & > {
    button {
      cursor: pointer;
    }
  }
`;
