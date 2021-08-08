import { m, LazyMotion, domAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import Div100vh from 'react-div-100vh';
import CountUp from 'react-countup';

const Loader = ({ setLoading }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Div100vh>
        <m.aside
          variants={revealLoader}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="show"
          exit="exit"
          className="loading-container">
          <m.div variants={fadeOut}>
            <m.div className="center">
              <m.h1 className="loading-title" variants={logoReveal}>
                Sunken Interior
              </m.h1>
            </m.div>
            <div className="loading-inner">
              <h1 className="loading-title">
                <FancySpan>
                  <m.span>
                    ’
                    <CountUp duration={4.125} end={100} start={0} delay={1} /> -
                  </m.span>
                </FancySpan>
              </h1>
            </div>
          </m.div>
        </m.aside>
      </Div100vh>
    </LazyMotion>
  );
};
export default Loader;

const revealLoader = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '-110%',
    transition: { duration: 1.3, ease: [0.77, 0, 0.175, 1] },
  },
};

const fadeOut = {
  hidden: {
    opacity: 0.1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 5.65,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    opacity: 0,
  },
};

export const logoReveal = {
  hidden: { opacity: 1, scale: 1.25 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    opacity: 0.1,
    transition: { duration: 1.25, ease: [0.77, 0, 0.175, 1] },
  },
};

