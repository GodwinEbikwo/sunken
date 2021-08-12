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
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '100%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

export default function NNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.1, delay: 0.2 } },
        }}>
        <Header>
          <Logo>
            <Link href="/" passHref>
              <a aria-label="Sunken Interior logo">
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    sunken interior
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </Logo>

          <Nav>
            <NavList>
              <li>
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    <FancyLink
                      destination="/contact"
                      a11yText="Navigate to the contact page"
                      label="Hello@sunkeninterior.com"
                      className="link link--metis"
                    />
                  </m.span>
                </FancySpan>
              </li>
            </NavList>
          </Nav>

          <CartContainer>
            <Nav>
              <NavList>
                <li>
                  <FancySpan>
                    <m.span variants={navLogoReveal} className="block">
                      <FancyLink
                        destination="/projects"
                        a11yText="Navigate to the contact page"
                        label="SUNKEN INTERIOR"
                        className="link link--metis"
                      />
                    </m.span>
                  </FancySpan>
                </li>
              </NavList>
            </Nav>

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
  position: fixed;
  top: calc(var(--golden-ratio) - 5px);
  left: var(--spacer);
  right: var(--spacer);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--golden-ratio) 0;
  z-index: 100;
  background: none;
  mix-blend-mode: difference;
  margin: 0 auto;
  max-width: var(--max-width);
`;

export const Nav = styled.nav`
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
  font-family: var(--font);
  font-weight: var(--font-md);
  text-transform: capitalize;
  text-align: center;
  text-transform: uppercase;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > {
    button {
      cursor: pointer;
    }
  }
`;
