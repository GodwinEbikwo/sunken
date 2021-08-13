/* eslint-disable react/prop-types */
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { line } from './new-services';

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ContentPlaceholder = ({ content }) => (
  <m.div
    variants={{
      initial: { opacity: 0 },
      enter: { opacity: 1 },
    }}
    transition={{ duration: 0.4 }}
    className="content-placeholder">
    <div>{content}</div>
  </m.div>
);

const AccordionComponent = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;

  return (
    <AnimatedBody>
      <m.header
        className="header"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}>
        <div className="flex space-between">
          <h4>{title}</h4>
          <m.div
            initial={false}
            animate={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(45deg)',
              willChange: 'transform',
            }}>
            <CloseIcon />
          </m.div>
        </div>
      </m.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.section
            key="content"
            initial="initial"
            animate="enter"
            exit="initial"
            variants={{
              enter: { opacity: 1, height: 'auto' },
              initial: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}>
            <ContentPlaceholder content={content} />
          </m.section>
        )}
      </AnimatePresence>
    </AnimatedBody>
  );
};

const Accordion = ({ id, title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionComponent
      i={id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={title}
      content={content}
    />
  );
};

export default Accordion;

const AnimatedBody = styled.div`
  .header {
    background: transparent;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    margin-bottom: 10px;
    padding: 0.5em 0;
    width: 100%;

    h4 {
      line-height: 1;
      text-align: left;
      text-transform: uppercase;
    }

    .line {
      width: 100%;
      height: 1px;
      transform-origin: center;
      background: var(--border-color);
    }
  }

  section {
    overflow: hidden;
  }

  .content-placeholder {
    padding: 1rem 0 2rem 0;
  }
`;
