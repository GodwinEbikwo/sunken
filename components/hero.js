import Image from 'next/image';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import { m } from 'framer-motion';
import { revealInOutReserve, fade } from '@/helpers/transitions';

 const HeroRevealIn = {
  initial: { y: '110%', opacity: 0, },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    y: '150%',
    transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
  },
};


export default function Hero() {
  return (
    <HeroBox>
      <m.aside className="hero-absolute" variants={fade}>
        <HeroTitle
          data-scroll
          data-scroll-speed="1.25"
          data-scroll-direction="horizontal">
          <FancySpan>
            <m.span variants={HeroRevealIn} className="inline-block">
              Sunken
            </m.span>
            <m.span
              variants={revealInOutReserve}
              className="inline-block m-left">
              Interior
            </m.span>
          </FancySpan>
        </HeroTitle>
      </m.aside>

      <m.aside variants={fade}>
        <div className="b-speed-block" data-scroll>
          <div className="b-image_wrapper" data-scroll data-scroll-repeat>
            <div className="b-image bgWrap" data-scroll>
              <Image
                alt="beautiful image"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453729/jason-wang-NxAwryAbtIw-unsplash_ltdiyg.jpg"
                quality="95"
                layout="fill"
                objectFit="cover"
                className="b-speed-block_image img not-selectable"
              />
            </div>
          </div>
        </div>
      </m.aside>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: relative;
  height: 85vh;
  transition: all var(--easing) 350ms;
  @media (min-width: 768px) {
    height: 100vh;
  }
  .m-left {
    margin-left: 0.1em;
  }

  .hero-absolute {
    padding: 1.25em;
    position: absolute;
    left: var(--spacer);
    bottom: 3vw;
    background: var(--bg);
    overflow: hidden;
    border-radius: 5px;
    @media (min-width: 800px) {
      bottom: 7vw;
      padding: 2.25em;
    }
  }
`;

const HeroTitle = styled.h1`
  text-align: center;
  line-height: 0.823;
  color: var(--text-black);
  @media (min-width: 768px) {
    text-align: start;
    margin-left: -1.15em;
    margin-right: 0.4em;
  }
`;
