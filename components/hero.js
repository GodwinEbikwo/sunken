import Image from 'next/image';
import styled from 'styled-components';
import { m } from 'framer-motion';
import { SplitText } from '@/helpers/split-text';

const fade = {
  initial: { opacity: 0, y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};

export default function Hero() {
  return (
    <HeroBox>
      <m.div variants={fade}>
        <m.aside className="hero-absolute">
          <HeroTitle data-scroll>
            <SplitText
              initial={{ y: '130%' }}
              animate="enter"
              exit={{
                y: '130%',
              }}
              variants={{
                enter: (i) => ({
                  y: 0,
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
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453729/jason-wang-NxAwryAbtIw-unsplash_ltdiyg.jpg"
                  width={1920}
                  height={960}
                  alt="sunken-image"
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
  min-height: 85vh;
  transition: all var(--easing) 350ms;
  padding: var(--spacer);

  @media (min-width: 768px) {
    min-height: 100vh;
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
  line-height: 0.825;
  font-size: 100px;
  font-weight: var(--font-md);
  font-family: var(--font);
  text-transform: uppercase;
  max-width: 80vw;
`;
