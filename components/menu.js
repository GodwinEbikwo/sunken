import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useMenu } from '@/helpers/menuState';
import styled from 'styled-components';
import { m, useAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import { useInView } from 'react-intersection-observer';
import { menuInOut } from '@/helpers/transitions';

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

export default function Menu({ open, setOpen }) {
  const closeRef = useRef();
  const { closeMenu } = useMenu();
  const controls = useAnimation();
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  useOnClickOutside(closeRef, () => setOpen(false));

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <m.div animate="enter" initial="initial" exit="exit">
      <MenuBox open={open} data-scroll-section>
        <m.div
          className="scroll-container"
          initial="initial"
          animate={controls}
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
                  <a onClick={() => setOpen(!open)}>About</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/">
                  <a onClick={() => setOpen(!open)}>Work</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/">
                  <a onClick={() => setOpen(!open)}>Contact</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/faq">
                  <a onClick={() => setOpen(!open)}>FAQ</a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>
          </div>
        </m.div>

        <footer>
          <div className="flex">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span className="block sm-spacing">&bull;</span>
            <span className="block sm-spacing">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </span>
            <span className="block sm-spacing">&bull;</span>
            <span className="block sm-spacing">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </span>
          </div>
        </footer>
      </MenuBox>

      <MenuLeft open={open}>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed iure
          nostrum molestiae ea est tempora fugiat eos voluptatum? Aperiam cum
          pariatur veritatis eos aspernatur earum quae temporibus laboriosam
          sint eaque, eligendi cupiditate, harum error ducimus dignissimos
          distinctio voluptate asperiores modi?
        </h2>
      </MenuLeft>
      <Overlay open={open} />
    </m.div>
  );
}

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      title="menu"
      aria-label="hamburger menu"
      open={open}
      onClick={() => setOpen(!open)}>
      <div aria-hidden="true" className="bg-line-top" />
      <div aria-hidden="true" className="bg-line-middle" />
      <div aria-hidden="true" className="bg-line-bottom" />
    </StyledBurger>
  );
};

const StyledBurger = styled.button`
  /* position: absolute;
  right: var(--spacer);
  top: var(--spacer); */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 1.5px;
    background: ${({ open }) => (open ? '#fff' : '#fff')};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3.5px;
    will-change: transform;

    :first-child {
      transform: ${({ open }) =>
        open ? 'translate3d(0, 0,  0) rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const MenuLeft = styled(m.aside)`
  position: fixed;
  background-color: var(--white);
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  max-width: 50%;
  transform: translate3d(-100%, 0, 0);
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.77, 0, 0.18, 1) 0.35s;
  will-change: transform;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0 calc(var(--golden-ratio) * 2) calc(var(--golden-ratio));
  color: white;
  perspective: 1000px;
  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
    transition: transform 1.1s cubic-bezier(.76,0,.24,1);
    cursor: pointer;`};
`;

const MenuBox = styled.aside`
  position: fixed;
  background-color: var(--black);
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 50%;
  transform: translate3d(100%, 0, 0);
  transition: transform 1s cubic-bezier(0.77, 0, 0.18, 1) 0.35s;
  will-change: transform;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0 calc(var(--golden-ratio) * 2) calc(var(--golden-ratio));
  color: white;
  perspective: 1000px;

  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
    transition: transform 1.1s cubic-bezier(.76,0,.24,1);
    cursor: pointer;`};

  .line {
    width: 100%;
    height: 1px;
    transform-origin: left;
    background: white;
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
      font-size: 10vw;
      letter-spacing: var(--ls-md);
      @media (min-width: 768px) {
        font-size: 3vw;
        font-weight: 600;
      }
    }
  }

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
  transition: opacity 1s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1s cubic-bezier(0.77, 0, 0.18, 1);
  cursor: pointer;
  ${(props) =>
    props.open && `opacity: 1; visibility: visible; transition-delay: 0.1s;`};
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
