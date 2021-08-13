import { m } from 'framer-motion';
import FancySpan from './fancySpan';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { SplitText } from '@/helpers/split-text';
import { revealInOut, fade } from '@/helpers/transitions';

export default function Contact() {
  return (
    <ContactBox>
      <Div100vh>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.1, delay: 0.35 } },
          }}>
          <m.div variants={fade}>
            <ContactInner>
              <ContactTitle>
                <SplitText
                  initial={{ y: '110%', opacity: 0 }}
                  animate="enter"
                  exit={{
                    y: '110%',
                  }}
                  variants={{
                    enter: (i) => ({
                      y: '0%',
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: [0.77, 0, 0.175, 1],
                        delay: i * 0.08,
                      },
                    }),
                  }}>
                  Get in touch
                </SplitText>
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
`;

const ContactInner = styled.div`
  position: absolute;
  top: 25%;
  left: var(--spacer);
`;

const ContactTitle = styled.h1`
  font-size: 15.778vw;
  line-height: 1;
  letter-spacing: var(--ls-lg);
  font-weight: var(--font-md);
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
