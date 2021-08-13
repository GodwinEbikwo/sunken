import styled from 'styled-components';
import { m } from 'framer-motion';
import { SplitText } from '@/helpers/split-text';
import FancySpan from './fancySpan';
import { HeroImage } from '@/post/cover-image';

export default function Hero({ title, responsiveImage }) {
  return (
    <HeroBox>
      <m.div variants={fade}>
        <m.aside className="hero-absolute">
          <m.div
            className="flex space-between wrap"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              enter: { transition: { staggerChildren: 0.08, delay: 0.2 } },
            }}>
            <HeroTitle data-scroll data-scroll-id="title">
              <SplitText
                initial={{ y: '110%', opacity: 0 }}
                animate="enter"
                exit={{
                  y: '110%',
                }}
                variants={{
                  enter: (i) => ({
                    y: '0%',
                    opacity: 1,
                    transition: {
                      duration: 1.3,
                      ease: [0.77, 0, 0.175, 1],
                      delay: i * 0.02,
                    },
                  }),
                }}>
                We turn your house into a home that your dog would love.
              </SplitText>
            </HeroTitle>

            <m.div className="hero-right">
              <h2>
                <FancySpan>
                  <m.span className="block" variants={enterIn}>
                    Abuja
                  </m.span>
                </FancySpan>

                <FancySpan>
                  <m.span className="block" variants={enterIn}>
                    Lagos
                  </m.span>
                </FancySpan>

                <FancySpan>
                  <m.span className="block" variants={enterIn}>
                    Est 2013
                  </m.span>
                </FancySpan>
              </h2>
            </m.div>
          </m.div>
        </m.aside>
        <m.aside className="hero-img">
          <HeroImage title={title} responsiveImage={responsiveImage} />
        </m.aside>
      </m.div>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: relative;
  padding: calc(var(--spacer-double) + var(--spacer-double)) var(--spacer);

  @media (min-width: 768px) {
    padding: calc(var(--spacer-double) * 4) var(--spacer);
    min-height: 100vh;
  }

  @media (min-width: 1024px) {
    padding: var(--spacer-double) var(--spacer);
  }

  .hero-absolute {
    margin-top: var(--spacer);
    top: 3vw;
    @media (min-width: 800px) {
      top: 7vw;
    }

    .hero-right {
      align-self: flex-end;
      h2 {
        font-size: 1.4vw;
      }
    }
  }

  .hero-img {
    max-width: 100vw;
    margin-top: var(--spacer);
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  line-height: 0.9;
  font-size: 9vw;
  font-weight: var(--font-md);
  text-transform: uppercase;
  @media (min-width: 1024px) {
    max-width: 32vw;
    line-height: 1;
    font-size: 2.75vw;
    letter-spacing: var(--ls-xsm);
  }
`;

const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.83, 0, 0.17, 1],
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: [0.83, 0, 0.17, 1] },
  },
};

export const enterIn = {
  initial: { y: '100%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '100%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};
