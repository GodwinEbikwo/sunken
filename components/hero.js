import Image from 'next/image';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import { m } from 'framer-motion';
import { revealInOut, revealInOutReserve, fade } from '@/helpers/transitions';

export default function Hero() {
  return (
    <HeroBox>
      <m.aside className="hero-absolute" variants={fade}>
        <HeroTitle
          data-scroll
          data-scroll-speed="1.25"
          data-scroll-direction="horizontal">
          <FancySpan>
            <m.span variants={revealInOut} className="inline-block">
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

      <aside className="b-speed-block" data-scroll>
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
      </aside>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: relative;
  height: 65vh;
  transition: all var(--easing) 350ms;

  .grayscale {
    filter: grayscale(100%);
  }

  @media (min-width: 800px) {
    height: 100vh;
  }
  .m-left {
    margin-left: 0.1em;
  }

  .hero-absolute {
    padding: 2.25em;
    position: absolute;
    left: var(--spacer);
    bottom: 22vw;
    background: white;
    overflow: hidden;
    @media (min-width: 800px) {
      bottom: 7vw;
      border-radius: 5px;
    }
  }

  /* .hero-absolute {
    position: absolute;
    margin-left: -0.125em;
    bottom: 22vw;
    @media (min-width: 800px) {
      bottom: 7vw;
      margin-left: -1.65em;
    }
  } */
`;

const HeroTitle = styled.h1`
  text-align: start;
  font-size: 5vw;
  line-height: 0.85;
  /* text-transform: uppercase; */
  letter-spacing: -0.055em;
  font-weight: 600;
  color: var(--text-black);
  font-family: var(--font);
  margin-left: -0.9em;
  margin-right: 0.4em;
`;
// const HeroTitle = styled.h1`
//   margin-bottom: var(--spacer-half);
//   text-align: start;
//   font-size: 16.7vw;
//   letter-spacing: -0.015em;
//   line-height: 0.85;
//   text-transform: uppercase;
//   color: var(--text-white);
//   font-family: var(--secondary-font);
//   font-feature-settings: 'liga', 'clig';
//   font-variant-ligatures: common-ligatures;
// `;
