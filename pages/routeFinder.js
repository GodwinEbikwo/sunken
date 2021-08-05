import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Navigation from '@/components/header';
import Layout from '@/components/layout';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { fade, revealIn } from '@/helpers/transitions';

export default function routeFinder() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title="Menu" />
      <Navigation />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}>
        <section data-scroll-container ref={containerRef} id="scroll-container">
          <aside data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fade}
                style={{ background: 'var(--accent-2)' }}>
                <>
                  <Div100vh className="flex flex-column px-2 py-2 relative mx-auto">
                    <m.nav
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="mt-auto"
                      variants={{
                        enter: { transition: { staggerChildren: 0.015 } },
                      }}>
                      <UL className="mx-auto relative">
                        <List className="flex justify-center relative">
                          <Link href="/info">
                            <a className="hover-el w-full flex align-center text_uppercase text-upright">
                              <div className="overflow-hidden">
                                <m.div variants={revealHori}>Info</m.div>
                              </div>
                            </a>
                          </Link>
                          <m.div
                            variants={revealIn}
                            className="line-animation"></m.div>
                        </List>

                        <List className="flex justify-center relative">
                          <Link href="/email">
                            <a className="hover-el w-full flex align-center text_uppercase text-upright">
                              <div className="overflow-hidden">
                                <m.div variants={revealHori}>Email</m.div>
                              </div>
                            </a>
                          </Link>
                          <m.div
                            variants={revealIn}
                            className="line-animation"></m.div>
                        </List>

                        <List className="flex justify-center relative">
                          <Link href="/about">
                            <a className="hover-el w-full flex align-center text_uppercase text-upright">
                              <div className="overflow-hidden">
                                <m.div variants={revealHori}>About</m.div>
                              </div>
                            </a>
                          </Link>
                          <m.div
                            variants={revealIn}
                            className="line-animation"></m.div>
                        </List>

                        <List className="flex justify-center relative">
                          <Link href="/contact">
                            <a className="hover-el w-full flex align-center text_uppercase text-upright">
                              <div className="overflow-hidden">
                                <m.div variants={revealHori}>work</m.div>
                              </div>
                            </a>
                          </Link>
                        </List>
                      </UL>
                    </m.nav>
                  </Div100vh>
                </>
              </m.div>
            </LazyMotion>
          </aside>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}


const revealHori = {
  initial: { x: '100%' },
  enter: {
    x: 0,
    transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
};

const UL = styled.ul`
  max-width: 1600px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.li`
  overflow: hidden;
  width: 25%;

  .hover-el {
    visibility: hidden;

    & > * {
      visibility: visible;
      transition: opacity 150ms var(--easing) 100ms,
        transform 150ms var(--easing) 100ms;
    }

    &:hover > * {
      opacity: 0.4;
      transform: scale(0.9);
    }

    & > * &:hover {
      opacity: 1;
      transform: scale(1);
      transition-delay: 0ms, 0ms;
    }
  }

  a {
    justify-content: flex-start;
    font-weight: 600;
    line-height: 0.84;
    font-size: 10vw;
    transition: all var(--easing) 400ms;
    font-variant-numeric: tabular-nums lining-nums;
    letter-spacing: var(--ls-lg);
    color: var(--text-black);
  }

  .text-upright {
    --rotate: -180deg;
    --translate-x: 0;
    --translate-y: 0;
    --skew-x: 0;
    --skew-y: 0;
    --scale-x: 1;
    --scale-y: 1;
    --transform: translateX(var(--translate-x)) translateY(var(--translate-y))
      rotate(var(--rotate)) skewX(var(--skew-x)) skewY(var(--skew-y))
      scaleX(var(--scale-x)) scaleY(var(--scale-y));
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: var(--transform);
  }

  .line-animation {
    height: 100%;
    width: 1px;
    transform-origin: bottom;
    background: black;
  }
`;
