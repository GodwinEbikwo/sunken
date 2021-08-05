import { m, LazyMotion, domAnimation } from 'framer-motion';
import { fade } from '@/helpers/transitions';
import styled from 'styled-components';
import FancySpan from './fancySpan';
import Div100vh from 'react-div-100vh';

export const LoaderRevealInOut = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.25,
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
      duration: 1.25,
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

const Loader = ({ setLoading }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Div100vh>
        <m.div>
          <m.aside
            variants={container}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit">
            <div className="center">
              <m.div variants={fade}>
                <h1 className="loading-title">
                  <FancySpan>
                    <m.span
                      variants={LoaderRevealInOut}
                      className="inline-block">
                      Sunken
                    </m.span>
                    <m.span
                      variants={LoaderRevealInOutReserve}
                      className="inline-block m-left">
                      Interior
                    </m.span>
                  </FancySpan>
                </h1>
              </m.div>
            </div>
          </m.aside>
        </m.div>
      </Div100vh>
    </LazyMotion>
  );
};
export default Loader;
