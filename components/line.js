import { useEffect } from 'react';
import styled from 'styled-components';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Line() {
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
        <Seperator variants={lineH}></Seperator>
      </m.div>
    </LazyMotion>
  );
}

const Seperator = styled(m.div)`
  background-color: var(--border-color);
  width: 100%;
  height: 1px;
  line-height: 27px;
`;

const lineH = {
  initial: { x: '-100%' },
  enter: {
    x: 0,
    transition: {
      duration: 1.65,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    x: 0,
    transition: { duration: 1.75, ease: [0.77, 0, 0.175, 1] },
  },
};

export function LineVertical() {
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
      <m.div
        initial="initial"
        animate={controls}
        exit="exit"
        ref={ref}
        className="hide-for-mobile">
        <SeperatorVertical variants={lineV}></SeperatorVertical>
      </m.div>
    </LazyMotion>
  );
}

const SeperatorVertical = styled(m.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--border-color);
  width: 1px;
  height: 100%;
  line-height: 27px;
`;

const lineV = {
  initial: { y: '-10%', opacity: 0.35 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: 0,
    transition: { duration: 1.75, ease: [0.77, 0, 0.175, 1] },
  },
};
