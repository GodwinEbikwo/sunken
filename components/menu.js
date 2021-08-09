import Link from 'next/link';
import Image from 'next/image';
import FancySpan from './fancySpan';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { m, useAnimation } from 'framer-motion';
import { menuInOut } from '@/helpers/transitions';
import { useInView } from 'react-intersection-observer';
import { src1, src2, src3, src4 } from '@/helpers/src';

export default function Menu({ open, setOpen }) {
  const controls = useAnimation();
  const [faqImgHovered, setFaqImgHovered] = useState(false);
  const [aboutImgHovered, setAboutImgHovered] = useState(false);
  const [workImgHovered, setWorkImgHovered] = useState(false);
  const [contactImgHovered, setContactImgHovered] = useState(false);
  const { ref, inView } = useInView();

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
      <MenuRight open={open} data-scroll-section>
        {faqImgHovered && (
          <ImageHoverDiv
            initial="initial"
            animate="enter"
            exit="exit"
            variants={showImage}
            data-scroll>
            <Image
              src={src1}
              width={640}
              height={631}
              alt="about"
              loading="eager"
            />
          </ImageHoverDiv>
        )}

        {aboutImgHovered && (
          <ImageHoverDiv
            initial="initial"
            animate="enter"
            exit="exit"
            variants={showImage}
            data-scroll>
            <Image
              src={src2}
              width={640}
              height={631}
              alt="about"
              loading="eager"
            />
          </ImageHoverDiv>
        )}

        {workImgHovered && (
          <ImageHoverDiv
            initial="initial"
            animate="enter"
            exit="exit"
            variants={showImage}
            data-scroll>
            <Image
              src={src3}
              width={640}
              height={631}
              alt="about"
              loading="eager"
            />
          </ImageHoverDiv>
        )}

        {contactImgHovered && (
          <ImageHoverDiv
            initial="initial"
            animate="enter"
            exit="exit"
            variants={showImage}
            data-scroll>
            <Image
              src={src4}
              width={640}
              height={631}
              alt="about"
              loading="eager"
            />
          </ImageHoverDiv>
        )}

        <footer>
          <div className="flex">
            <a
              aria-label="navigate to instagram"
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              Instagram
            </a>
            <span className="block sm-spacing">&bull;</span>
            <span className="block sm-spacing">
              <a
                aria-label="navigate to twitter"
                href="/"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </span>
            <span className="block sm-spacing">&bull;</span>
            <span className="block sm-spacing">
              <a
                aria-label="navigate to contact page"
                href="/"
                target="_blank"
                rel="noopener noreferrer">
                Contact
              </a>
            </span>
          </div>
        </footer>
      </MenuRight>

      <MenuLeft open={open}>
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
                <Link href="/faq">
                  <a
                    onMouseEnter={() => setFaqImgHovered(true)}
                    onMouseLeave={() => setFaqImgHovered(false)}
                    onClick={() => setOpen(!open)}>
                    Faq
                  </a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/about">
                  <a
                    onMouseEnter={() => setAboutImgHovered(true)}
                    onMouseLeave={() => setAboutImgHovered(false)}
                    onClick={() => setOpen(!open)}>
                    About
                  </a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/">
                  <a
                    onMouseEnter={() => setWorkImgHovered(true)}
                    onMouseLeave={() => setWorkImgHovered(false)}
                    onClick={() => setOpen(!open)}>
                    Work
                  </a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>

            <FancySpan>
              <m.span className="block" variants={menuInOut}>
                <Link href="/">
                  <a
                    onMouseEnter={() => setContactImgHovered(true)}
                    onMouseLeave={() => setContactImgHovered(false)}
                    onClick={() => setOpen(!open)}>
                    Contact
                  </a>
                </Link>
              </m.span>
              <m.div variants={linerevealIn} className="line"></m.div>
            </FancySpan>
          </div>
        </m.div>
      </MenuLeft>
      <Overlay open={open} />
    </m.div>
  );
}

const MenuLeft = styled.aside`
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
  padding: 0 calc(var(--golden-ratio) * 2) calc(var(--golden-ratio));
  perspective: 1000px;
  color: var(--black);

  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
    transition: transform 1.1s cubic-bezier(.76,0,.24,1);
    cursor: pointer;`};

  .line {
    width: 100%;
    height: 1px;
    transform-origin: left;
    background: var(--border-color);
  }

  .scroll-container {
    margin-top: 10rem;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    a {
      font-size: 10vw;
      letter-spacing: var(--ls-md);
      @media (min-width: 768px) {
        font-size: 3vw;
        font-weight: var(--font-md);
      }
    }
  }
`;

const MenuRight = styled.aside`
  position: fixed;
  background-color: var(--black);
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 50%;
  transform: translate3d(101%, 0, 0);
  transition: transform 1s cubic-bezier(0.77, 0, 0.18, 1) 0.35s;
  will-change: transform;
  z-index: 5;
  grid-template-rows: auto 1fr auto;
  padding: 0 calc(var(--golden-ratio) * 2) calc(var(--golden-ratio));
  color: var(--white);
  perspective: 1000px;
  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
      transition: transform 1.1s cubic-bezier(.76,0,.24,1);
      cursor: pointer;
    `};
  @media (max-width: 767px) {
    min-width: 50%;
  }

  footer {
    position: absolute;
    bottom: var(--golden-ratio);
    right: var(--golden-ratio);
    align-items: center;
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

const showImage = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.77, 0, 0.18, 1],
    },
  },
  exit: {
    opacity: 0,
  },
};

export const linerevealIn = {
  initial: { x: '-100%' },
  enter: {
    x: 0,
    transition: { duration: 1, ease: [0.77, 0, 0.18, 1] },
  },
  exit: {
    x: '-100%',
    transition: { duration: 0.85, ease: [0.77, 0, 0.18, 1] },
  },
};

const ImageHoverDiv = styled(m.div)`
  overflow: hidden;
  padding: var(---spacer);
  position: absolute;
  bottom: 4vw;
  right: calc(6vw / 2.125);
  height: 482px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  z-index: 15;
`;
