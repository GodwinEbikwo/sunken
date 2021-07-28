import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import { fade } from '@/helpers/transitions';
import FancyLink from './fancyLink';

export default function Navigation() {
  return (
    <m.div variants={fade}>
      <Header>
        <Nav>
          <NavList>
            <li>
              <span>
                <FancyLink
                  destination="/contact"
                  a11yText="Navigate to the contact page"
                  label="Contact"
                  className="link link--metis"
                />
              </span>
            </li>
          </NavList>
        </Nav>

        <Link href="/" passHref>
          <Logo>
            <Image src="/logo.svg" height={50} width={50} alt="logo" />
          </Logo>
        </Link>

        <CartContainer>
          <FancyLink
            destination="/menu"
            a11yText="Navigate to the menu"
            label="menu"
            className="link link--metis"
          />
        </CartContainer>
      </Header>
    </m.div>
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
  top: var(--spacer-half);
  left: var(--spacer);
  right: var(--spacer);
  z-index: 100;
  cursor: pointer;
  z-index: 3;
  color: white;

  @media (max-width: 800px) {
    padding: var(--spacer) 0;
    padding-right: var(--spacer);
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
  font-weight: 500;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 10.764vw;
  text-transform: uppercase;

  li {
    color: white;
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
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: cart;
  text-transform: uppercase;
  font-weight: 500;

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
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
