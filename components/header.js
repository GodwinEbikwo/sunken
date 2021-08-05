import styled from 'styled-components';
import Link from 'next/link';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import FancyLink from './fancyLink';
import FancySpan from './fancySpan';
import Menu, { Burger } from './menu';
import { useMenu } from '@/helpers/menuState';
import { useState } from 'react';

const navLogoReveal = {
  initial: { y: '-100%' },
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
                  <m.span variants={navLogoReveal} className="block">
                    <FancyLink
                      destination="/About"
                      a11yText="Navigate to the about page"
                      label="About"
                      className="link link--metis"
                    />
                  </m.span>
                </FancySpan>
              </li>
              <li>
                <FancySpan>
                  <m.span
                    variants={navLogoReveal}
                    className="block hide-for-mobile">
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

          <Link href="/" passHref>
            <Logo>
              <FancySpan>
                <m.span variants={navLogoReveal} className="block">
                  S.
                </m.span>
              </FancySpan>
            </Logo>
          </Link>

          <CartContainer>
            <FancySpan>
              <m.div variants={navLogoReveal} className="block hide-for-mobile">
                <button
                  type="button"
                  style={{ outline: 'none', marginRight: '1em' }}
                  aria-label="open cart">
                  <span>Invert-color</span>
                </button>
              </m.div>
            </FancySpan>

            <FancySpan>
              <m.div variants={navLogoReveal} className="block">
                <Burger open={open} setOpen={setOpen}  />
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
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 16.806vw 20vw 16.806vw;
  grid-template-areas: 'nav logo cart';
  width: calc(100vw - var(--spacer-double));
  background: none;
  mix-blend-mode: difference;
  position: fixed;
  top: var(--golden-ratio);
  left: var(--spacer);
  right: var(--spacer);
  z-index: 100;
  cursor: pointer;
  z-index: 7;
  /* color: white; */

  @media (max-width: 800px) {
    padding: var(--spacer);
    display: flex;
    .header_inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 11.733vw;
      width: 100%;
    }
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
  text-transform: uppercase;

  li {
    display: list-item;
    text-align: -webkit-match-parent;
    &:not(:first-child) {
      margin-left: var(--golden-ratio);
    }
    & > span {
      display: inline-block;
    }
  }
`;

export const Logo = styled.div`
  text-align: center;
  grid-area: logo;
  font-family: var(--font);
  font-size: 3rem;
  font-weight: var(--font-lg);
  text-transform: capitalize;
  letter-spacing: -0.07em;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: cart;
  text-transform: uppercase;
  font-weight: var(--font-md);
  z-index: 10;

  & > {
    a,
    p,
    button {
      cursor: pointer;
      &:not(:first-child) {
        margin-left: var(--golden-ratio);
      }
      & > span {
        display: inline-block;
        width: 11.5px;
        height: 11.5px;
        border-radius: 100%;
        background-color: var(--button-white);
        margin-left: 0.55rem;
      }
    }
  }

  button {
    color: var(--white);
    text-transform: uppercase;
    font-weight: var(--font-md);
  }
`;
