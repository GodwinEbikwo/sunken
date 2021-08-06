import { useState } from 'react';
import Menu, { Burger } from './menu';
import FancyLink from './fancyLink';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import Link from 'next/link';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { SplitText } from '@/helpers/split-text';

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

export default function Nav() {
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
          <nav className="flex flex-wrap align-center space-between">
            <FancyLink
              destination="/projects"
              a11yText="Navigate to the projects page"
              label="Projects"
              className="border-r link link--metis"
            />

            <Link href="/" passHref>
              <Logo>
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    S.
                  </m.span>
                </FancySpan>
              </Logo>
            </Link>

            <div className="border-l btn-padding">
              <FancySpan>
                <m.div variants={navLogoReveal} className="block">
                  <Burger open={open} setOpen={setOpen} />
                </m.div>
              </FancySpan>
            </div>
          </nav>
        </Header>
        <Menu open={open} setOpen={setOpen} />
      </m.div>
    </LazyMotion>
  );
}

const Header = styled.header`
  background: var(--bg);
  position: fixed;
  top: 0;
  left: var(--spacer);
  right: var(--spacer);
  width: calc(100vw - var(--spacer-double));
  border-bottom: 1px solid var(--border-color);
  z-index: 6;

  .border-r {
    border-right: 1px solid var(--border-color);
  }

  .border-l {
    border-left: 1px solid var(--border-color);
  }

  & > nav {
    font-size: 2rem;

    .btn-padding {
      z-index: 10;
      padding: calc(var(--spacer-half));
    }

    a {
      text-transform: uppercase;
      font-weight: var(--font-md);
      padding: calc(var(--spacer-half));
    }
  }
`;

export const Logo = styled.div`
  z-index: 10;
  text-align: center;
  font-family: var(--font);
  font-size: 3rem;
  font-weight: var(--font-lg);
  text-transform: capitalize;
  letter-spacing: -0.07em;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
