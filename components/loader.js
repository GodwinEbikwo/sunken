import { m, LazyMotion, domAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import Div100vh from 'react-div-100vh';
import CountUp from 'react-countup';

const Loader = ({ setLoading }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Div100vh>
        <m.div>
          <m.aside
            variants={revealLoader}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="loading-container">
            <m.div variants={fadeOut}>
              <m.div className="center">
                <h1 className="loading-title">S</h1>
              </m.div>
              <div className="loading-inner">
                <h1 className="loading-title">
                  <FancySpan>
                    <m.span variants={revealLoaderInOut}>
                      ’
                      <CountUp
                        duration={4.5}
                        end={93}
                        start={0}
                        delay={0.65}
                      />{' '}
                      -
                    </m.span>
                  </FancySpan>
                </h1>
              </div>
            </m.div>
          </m.aside>
        </m.div>
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
    transition: { duration: 1.25, ease: [0.77, 0, 0.175, 1] },
  },
};

const fadeOut = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 5.5,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    opacity: 0,
  },
};


const revealLoaderInOut = {
  initial: { y: '110%' },
  enter: {
    y: '0%',
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.85,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};
