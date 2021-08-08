import Image from 'next/image';
import styled from 'styled-components';
import { m } from 'framer-motion';
import { SplitText } from '@/helpers/split-text';
import { useEffect } from 'react';

export default function Hero() {
  return (
    <HeroBox>
      <m.div variants={fade}>
        <m.aside className="hero-absolute">
          <HeroTitle data-scroll data-scroll-id="title">
            <SplitText
              initial={{ y: '110%', opacity: 0 }}
              animate="enter"
              exit={{
                y: '110%',
              }}
              variants={{
                enter: (i) => ({
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    ease: [0.77, 0, 0.175, 1],
                    delay: i * 0.02,
                  },
                }),
              }}>
              Sunken Interior Helping to transform your home renovation
            </SplitText>
          </HeroTitle>
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
  font-family: var(--font);
  text-transform: uppercase;
  @media (min-width: 1024px) {
    line-height: 0.825;
    max-width: 80vw;
    font-size: 100px;
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

