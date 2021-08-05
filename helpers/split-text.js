import { m, LazyMotion, domAnimation } from 'framer-motion';

export function SplitText({ children, ...rest }) {
  let words = children.split(' ');
  return words.map((word, i) => {
    return (
      <LazyMotion features={domAnimation}>
        <span
          key={children + i}
          className="inline-block relative overflow-hidden">
          <m.span
            {...rest}
            className="inline-block not-selectable will-change"
            custom={i}>
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </m.span>
        </span>
      </LazyMotion>
    );
  });
}
