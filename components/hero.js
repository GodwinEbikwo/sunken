import Image from 'next/image';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import { m } from 'framer-motion';
import { revealInOut, revealInOutReserve, fade } from '@/helpers/transitions';
import Div100vh from 'react-div-100vh';

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
    background: white;
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
  font-size: 8vw;
  line-height: 0.85;
  letter-spacing: -0.055em;
  font-weight: 600;
  color: var(--text-black);
  @media (min-width: 800px) {
    text-align: start;
    margin-left: -0.9em;
    margin-right: 0.4em;
    font-size: 5vw;
  }
`;
