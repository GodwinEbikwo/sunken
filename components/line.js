import { useEffect } from 'react';
import styled from 'styled-components';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Line({ className }) {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }

    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial="initial" animate={controls} exit="exit" ref={ref}>
        <Seperator variants={lineH} className={className}></Seperator>
      </m.div>
    </LazyMotion>
  );
}

const Seperator = styled(m.div)`
  background-color: var(--border-color);
  width: 100%;
  height: 1px;

  &.has-my {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

const lineH = {
  initial: { x: '-100%' },
  enter: {
    x: 0,
    transition: {
      duration: 1.35,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    x: 0,
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};
