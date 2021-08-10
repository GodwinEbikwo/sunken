import Image from 'next/image';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import { m } from 'framer-motion';
import { revealInOutReserve, fade } from '@/helpers/transitions';
import { Button } from '@/styles/headings';
import FancyLink from './fancyLink';

const CtaRevealIn = {
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

export default function Cta() {
  return (
    <CtaBox>
      <m.aside className="absolute center" variants={fade}>
        <div className="flex flex-column align-center justify-center">
          <CtaTitle className="text-center" data-scroll>
            <FancySpan>
              <m.span variants={CtaRevealIn} className="inline-block">
                Looking for a partner
              </m.span>
              <m.span
                variants={revealInOutReserve}
                className="inline-block m-left">
                for your <span style={{ fontStyle: 'italic' }}>home</span>{' '}
                revonation?
              </m.span>
            </FancySpan>
          </CtaTitle>

          <Button title="get in touch button" aria-label="get in touch">
            Get in touch
          </Button>
        </div>
      </m.aside>
    </CtaBox>
  );
}

const CtaBox = styled.section`
  position: relative;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/godwinebikwo/image/upload/v1627932917/header-jobs-1920x1080-q72_onv2uu.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .m-left {
    margin-left: 0.1em;
  }

  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.2;
    z-index: 0;
  }
`;

const CtaTitle = styled.h1`
  line-height: 0.9;
  font-family: var(--font);
  font-weight: var(--font-md);
  letter-spacing: var(--ls-md);
  margin-bottom: var(--golden-ratio);
`;
