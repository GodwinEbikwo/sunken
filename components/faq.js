import Image from 'next/image';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import { m } from 'framer-motion';
import { revealInOutReserve, fade } from '@/helpers/transitions';

export default function Faq() {
  return (
    <FaqBox>
      <m.aside className="faq-absolute" variants={fade}>
        <FaqTitle
          data-scroll
          data-scroll-speed="1.25"
          data-scroll-direction="horizontal">
          <FancySpan>
            <m.span variants={FaqRevealIn} className="inline-block">
              FAQ
            </m.span>
            <m.span
              variants={revealInOutReserve}
              className="inline-block m-left">
              Sunken Interior
            </m.span>
          </FancySpan>
        </FaqTitle>
      </m.aside>

      <m.aside variants={fade}>
        <div className="b-speed-block" data-scroll>
          <div className="b-image_wrapper" data-scroll data-scroll-repeat>
            <div className="b-image bgWrap" data-scroll>
              <Image
                alt="faq image"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627932917/header-jobs-1920x1080-q72_onv2uu.jpg"
                quality="95"
                layout="fill"
                objectFit="cover"
                className="b-speed-block_image img not-selectable"
              />
            </div>
          </div>
        </div>
      </m.aside>
    </FaqBox>
  );
}


const FaqRevealIn = {
  initial: { y: '110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.77, 0, 0.175, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    y: '150%',
    transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
  },
};


const FaqBox = styled.section`
  position: relative;
  height: 85vh;
  transition: all var(--easing) 350ms;

  @media (min-width: 768px) {
    height: 100vh;
  }

  .m-left {
    margin-left: 0.1em;
  }

  .faq-absolute {
    position: absolute;
    left: var(--spacer);
    bottom: var(--spacer-double);
    overflow: hidden;
    @media (min-width: 800px) {
      bottom: 7vw;
    }
  }
`;

const FaqTitle = styled.h1`
  line-height: 0.823;
  @media (min-width: 768px) {
    text-align: start;
  }
`;
