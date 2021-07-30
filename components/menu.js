import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useMenu } from '@/helpers/menuState';
import styled from 'styled-components';
import { m, useAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import { useInView } from 'react-intersection-observer';
import { menuInOut, fade } from '@/helpers/transitions';

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export const linerevealIn = {
  initial: { x: '-100%' },
  enter: {
    x: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.85, ease: [0.83, 0, 0.17, 1] },
  },
};

export default function Menu() {
  const closeRef = useRef();
  const { menuOpen, closeMenu } = useMenu();
  const newControls = useAnimation();
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  useOnClickOutside(closeRef, () => closeMenu(false));

  useEffect(() => {
    if (inView) {
      newControls.start('enter');
    }
    if (!inView) {
      newControls.start('hidden');
    }
  }, [newControls, inView]);

  return (
    <m.div animate="enter" initial="initial" exit="exit">
      <MenuBox open={menuOpen} data-scroll-section ref={closeRef}>
        <div className="header-container" data-scroll>
          <header className="flex sb cart-header">
            <button type="button" onClick={closeMenu} className="button_label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="var(--black)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </header>
        </div>

        <m.div
          className="scroll-container"
          initial="initial"
          animate={newControls}
          exit="exit"
          variants={{
            enter: {
              transition: {
                staggerChildren: 0.08,
                delay: 0.35,
              },
            },
          }}>
          <div ref={ref}>
            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/routeFinder">
                  <a onClick={closeMenu}>About</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/">
                  <a onClick={closeMenu}>Work</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/">
                  <a onClick={closeMenu}>Contact</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>
          </div>
        </m.div>

        <footer>
          <p>email</p>
          <p>contact</p>
        </footer>
      </MenuBox>
      <Overlay open={menuOpen} />
    </m.div>
  );
}

const MenuBox = styled.aside`
  position: fixed;
  background-color: var(--accent-1);
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 590px;
  transform: translate3d(100%, 0, 0);
  transition: transform 1.2s cubic-bezier(0.77, 0, 0.18, 1) 0.45s;
  will-change: transform;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0 calc(var(--golden-ratio) * 2) calc(var(--golden-ratio));
  color: var(--black);

  .line {
    width: 100%;
    height: 1px;
    transform-origin: bottom;
    background: var(--black);
  }

  @media (max-width: 767px) {
    min-width: 100%;
  }

  .header-container {
    .button_label {
      position: absolute;
      right: var(--spacer);
      top: var(--spacer);
      cursor: pointer;
    }
  }

  .scroll-container {
    margin-top: 8rem;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    a {
      font-size: 4vw;
      letter-spacing: var(--ls-lg);
      @media (max-width: 767px) {
        font-size: 10vw;
        letter-spacing: var(--ls-md);
      }
    }
  }

  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
    transition: transform 1.1s cubic-bezier(.76,0,.24,1);
    cursor: pointer;`};

  footer {
    align-items: center;

    p {
      margin: 0.5rem 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
`;

export const Overlay = styled.div`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 9, 9, 0.9);
  z-index: 4;
  transition: opacity 1.2s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1.2s cubic-bezier(0.77, 0, 0.18, 1);
  cursor: pointer;
  ${(props) =>
    props.open && `opacity: 1; visibility: visible; transition-delay: 0.3s;`};
`;

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const letterAni = {
//   initial: { y: '100%', opacity: 0, rotate: '-45deg' },
//   animate: {
//     opacity: 1,
//     rotate: '0deg',
//     y: '0%',
//     transition: {
//       ease: [0.83, 0, 0.17, 1],
//       duration: 1,
//     },
//   },
// };

// export const AnimatedLetters = ({ title }) => (
//   <m.span
//     className="row-letter"
//     variants={banner}
//     initial="initial"
//     animate="animate">
//     {[...title].map((letter, index) => (
//       <m.span className="row-letter" variants={letterAni} key={index}>
//         {letter}
//       </m.span>
//     ))}
//   </m.span>
// );
