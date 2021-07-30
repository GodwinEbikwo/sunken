import { m, LazyMotion, domAnimation } from 'framer-motion';
import Image from 'next/image';
import {  fade } from '@/helpers/transitions';
import styled from "styled-components";
import FancySpan from './fancySpan';

export const LoaderRevealInOut = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.77, 0, 0.175, 1],
      repeat: 1,
      repeatType: 'reverse',
    },
  },
  exit: {
    y: '110%',
    transition: { duration: 0.2, ease: [0.77, 0, 0.175, 1] },
  },
};

export const LoaderRevealInOutReserve = {
  hidden: { y: '-110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.77, 0, 0.175, 1],
      repeat: 1,
      repeatType: 'reverse',
    },
  },
  exit: {
    y: '-110%',
    transition: { duration: 0.2, ease: [0.77, 0, 0.175, 1] },
  },
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <m.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}>
      <Image
        width={400}
        height={200}
        src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627317608/inside-weather-OzqieLcs464-unsplash_ipy4fb.jpg"
        alt={id}
      />
    </m.div>
  );
};


const Loader = ({ setLoading }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section className="loader">
        <m.aside
          variants={container}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="show"
          exit="exit"
          className="loader-inner">
          <div className="center">
            <m.div variants={fade}>
              <LoaderTitle>
                <FancySpan>
                  <m.span variants={LoaderRevealInOut} className="inline-block">
                    Sunken
                  </m.span>
                  <m.span
                    variants={LoaderRevealInOutReserve}
                    className="inline-block m-left">
                    Interior
                  </m.span>
                </FancySpan>
              </LoaderTitle>
            </m.div>
          </div>
        </m.aside>
      </m.section>
    </LazyMotion>
  );
};
export default Loader;

const LoaderTitle = styled.h1`
  text-align: start;
  font-size: 5vw;
  line-height: 0.85;
  letter-spacing: -0.055em;
  font-weight: 600;
  font-family: var(--font);
  margin-left: -0.9em;
  margin-right: 0.4em;

  .m-left {
    margin-left: 0.15em;
  }
`;

