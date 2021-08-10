import Image from 'next/image';
import styled from 'styled-components';
import { m } from 'framer-motion';
import { SplitText } from '@/helpers/split-text';
import FancySpan from './fancySpan';
import { revealInOut } from '@/helpers/transitions';

export default function Hero() {
  return (
    <HeroBox>
      <m.div variants={fade}>
        <m.aside className="hero-absolute">
          <m.div className="flex space-between wrap">
            <HeroTitle data-scroll data-scroll-id="title">
              <SplitText
                initial={{ y: '110%', opacity: 0 }}
                animate="enter"
                exit={{
                  y: '110%',
                }}
                variants={{
                  enter: (i) => ({
                    y: "0%",
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                      ease: [0.77, 0, 0.175, 1],
                      delay: i * 0.035,
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
          <div className="b-speed-block" data-scroll>
            <div
              className="b-image_wrapper overflow-hidden"
              data-scroll
              data-scroll-repeat>
              <div
                data-scroll
                data-scroll-speed="-2.5"
                className="b-image"
                data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/q_auto:best/v1628342053/fakurian-design-Z8Bux5T0XMg-unsplash_cnucvl.jpg"
                  width={1920}
                  height={960}
                  alt="photo by fakurian design on unsplash"
                  className="b-speed-block_image img not-selectable"
                />
              </div>
            </div>
          </div>
        </m.aside>
      </m.div>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: relative;
  min-height: 50vh;
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
  font-weight: var(--font-sm);
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
      duration: 0.9,
      ease: [0.83, 0, 0.17, 1],
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};



export const enterIn = {
  initial: { y: '120%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '110%',
    transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
  },
};