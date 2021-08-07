import { m, LazyMotion, domAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import Div100vh from 'react-div-100vh';

const Loader = ({ setLoading }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Div100vh>
        <m.div>
          <m.aside
            variants={reveal}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="loading-container">
            <m.div>
              <div className="center">
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
              </div>
            </m.div>
          </m.aside>
        </m.div>
      </Div100vh>
    </LazyMotion>
  );
};
export default Loader;


const reveal = {
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

const LoaderRevealInOut = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
      repeat: 1,
      repeatType: 'reverse',
    },
  },
  exit: {
    y: '110%',
    transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] },
  },
};

const LoaderRevealInOutReserve = {
  hidden: { y: '-110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
      repeat: 1,
      repeatType: 'reverse',
    },
  },
  exit: {
    y: '-110%',
    transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] },
  },
};
