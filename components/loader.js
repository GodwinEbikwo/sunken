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
      duration: 1.5,
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
      duration: 1.5,
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
                <LoaderTitle>
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
                </LoaderTitle>
              </m.div>
            </div>
          </m.aside>
        </m.div>
      </Div100vh>
    </LazyMotion>
  );
};
export default Loader;

const LoaderTitle = styled.h1`
  text-align: center;
  font-size: 10vw;
  line-height: 0.85;
  white-space: nowrap;
  letter-spacing: -0.055em;
  font-weight: 600;
  /* font-family: var(--Ros); */
  @media (min-width: 768px) {
    font-size: 5vw;
  }

  .m-left {
    margin-left: 0.2em;
    @media (min-width: 768px) {
      margin-left: 0.15em;
    }
  }
`;

const LoaderBox = styled(m.section)`
  background-color: var(--accent-1);
`;

const LoaderInner = styled(m.aside)`
  background-color: var(--accent-1);
`;
