import { m } from 'framer-motion';
import FancySpan from './fancySpan';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { SplitText } from '@/helpers/split-text';
import { revealInOut, fade } from '@/helpers/transitions';
import FancyLink from './fancyLink';

var title = 'Godwin';
const Ani = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};
const letterAni = {
  initial: { opacity: 1, x: '-101%' },
  enter: {
    opacity: 1,
    originX: 0.5,
    originY: 0.5,
    x: '-0.0986328125%',
    transition: {
      duration: 1.1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    x: '101%',
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

export default function Contact() {
  return (
    <ContactBox>
      <Div100vh>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.06, delay: 0.3 } },
          }}>
          <m.div variants={fade}>
            <ContactInner>
              <ContactTitle>
                <m.div variants={Ani}>
                  <SplitText
                    initial={{ y: '101%', opacity: 0 }}
                    animate="enter"
                    exit={{
                      y: '-110%',
                    }}
                    variants={{
                      enter: (i) => ({
                        y: '0%',
                        opacity: 1,
                        transition: {
                          duration: 1,
                          ease: [0.77, 0, 0.175, 1],
                          delay: i * 0.02,
                        },
                      }),
                    }}>
                    Get in touch
                  </SplitText>
                </m.div>
              </ContactTitle>
            </ContactInner>
            <ContactSocials
              variants={{
                enter: { transition: { staggerChildren: 0.1, delay: 0.35 } },
              }}>
              <h2>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    Contact details
                  </m.span>
                </FancySpan>
              </h2>
              <ul>
                <li>
                  <a className="link link--ersa" href="/">
                    <m.span variants={revealInOut}>TikTok</m.span>
                  </a>
                </li>
                <li>
                  <a className="link link--ersa" href="/">
                    <m.span variants={revealInOut}>Twitter</m.span>
                  </a>
                </li>

                <li>
                  <a className="link link--ersa" href="/">
                    <m.span variants={revealInOut}>Pinterest</m.span>
                  </a>
                </li>
                <li>
                  <a className="link link--ersa" href="/">
                    <m.span variants={revealInOut}>Instagram</m.span>
                  </a>
                </li>

                <li>
                  <a className="link link--ersa" href="/">
                    <m.span variants={revealInOut}>Facebook</m.span>
                  </a>
                </li>
              </ul>
            </ContactSocials>
          </m.div>
        </m.div>
      </Div100vh>
    </ContactBox>
  );
}

const ContactBox = styled.div`
  position: relative;

  p {
    max-width: 30vw;
  }
`;

const ContactInner = styled.div`
  position: absolute;
  top: 25%;
  left: var(--spacer);
`;

const ContactTitle = styled(m.h1)`
  font-size: 15.778vw;
  line-height: 1;
  letter-spacing: var(--ls-lg);
  font-weight: var(--font-md);

  /* & > div {
    span {
      &:not(:last-child) {
        margin-left: calc(-0.36vh + -0.4px);
      }
    }
  } */
`;

const ContactSocials = styled(m.div)`
  display: flex;
  position: absolute;
  bottom: 9vw;
  left: var(--spacer-double);
  width: 100vw;

  h2 {
    width: 21.653vw;
    padding: 3rem 0;
    line-height: 1;
    letter-spacing: var(--ls-sm);
    font-weight: var(--font-sm);
    text-transform: uppercase;

    &::after {
      height: 1px;
      width: 3rem;
      content: '';
      display: block;
      background: var(--white);
      margin-top: 1rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 3rem 0;

    li {
      display: block;
      padding: 5px 0;

      a {
        display: block;
        overflow: hidden;
        position: relative;
        text-transform: uppercase;
        will-change: transform;
      }
    }
  }
`;
