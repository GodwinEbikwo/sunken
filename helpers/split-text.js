import { m } from 'framer-motion';

export function SplitText({ children, ...rest }) {
  let words = children.split(' ');
  return words.map((word, i) => {
    return (
      <span key={children + '-' + i} className="inline-block overflow-hidden">
        <m.span {...rest} className="block will-change" custom={i}>
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </m.span>
      </span>
    );
  });
}
