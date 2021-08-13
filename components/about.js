import { useEffect } from 'react';
import Image from 'next/image';
import { m, useAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import { revealInOut, fade } from '@/helpers/transitions';
import { useInView } from 'react-intersection-observer';
import { SplitText } from '@/helpers/split-text';
import {
  AboutBox,
  AboutIntro,
  AboutMiddle,
  AboutMiddleP,
  AboutGrid,
} from '@/styles/aboutStyles';

export default function About() {
  const newControls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      newControls.start('enter');
    }

    if (!inView) {
      newControls.start('hidden');
    }
  }, [newControls, inView]);

  return (
    <>
      <AboutBox>
        <m.div variants={fade}>
          <AboutIntro data-scroll>
            <m.div initial="initial" animate="enter" exit="exit">
              <AboutGrid>
                <div />
                <div className="firs-col" data-scroll>
                  <h1>
                    <FancySpan>
                      <m.span className="block" variants={revealInOut}>
                        About us
                      </m.span>
                    </FancySpan>
                  </h1>
                  <div className="cc flex flex-column">
                    <p>
                      <SplitText
                        initial={{ y: '110%', opacity: 0 }}
                        animate="enter"
                        exit={{ y: '110%' }}
                        variants={{
                          enter: (i) => ({
                            y: '0%',
                            opacity: 1,
                            transition: {
                              duration: 1.3,
                              ease: [0.77, 0, 0.175, 1],
                              delay: i * 0.01,
                            },
                          }),
                        }}>
                        At Sunken, we exist to ideate, visualise, and create a
                        new era of modern infrastructure. Our team, led by
                        contemporary designer, and leader in modern design
                        achitecture interior, Segun Sowunmi.
                      </SplitText>
                    </p>
                    <p>
                      <SplitText
                        initial={{ y: '110%', opacity: 0 }}
                        animate="enter"
                        exit={{ y: '110%' }}
                        variants={{
                          enter: (i) => ({
                            y: '0%',
                            opacity: 1,
                            transition: {
                              duration: 1.85,
                              ease: [0.77, 0, 0.175, 1],
                              delay: i * 0.02,
                            },
                          }),
                        }}>
                        We work to bring your project one step closer to reality
                        by using creative direction, 3D architectural
                        visualisations, and motion design.
                      </SplitText>
                    </p>
                  </div>
                </div>
              </AboutGrid>
            </m.div>
          </AboutIntro>

          <AboutMiddle data-scroll>
            <AboutGrid>
              <div />
              <div className="firs-col" data-scroll>
                <h1>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      Team
                    </m.span>
                  </FancySpan>
                </h1>
                <div className="cc flex">
                  <p>
                    <SplitText
                      initial={{ y: '110%', opacity: 0 }}
                      animate="enter"
                      exit={{ y: '110%' }}
                      variants={{
                        enter: (i) => ({
                          y: '0%',
                          opacity: 1,
                          transition: {
                            duration: 2.25,
                            ease: [0.77, 0, 0.175, 1],
                            delay: i * 0.03,
                          },
                        }),
                      }}>
                      We’re a growing team of achitects that love every detail
                      of our work and believe in transforming your house space
                      to something functional and peaceful.
                    </SplitText>
                  </p>
                </div>
              </div>
            </AboutGrid>

            <AboutGrid>
              <div />
              <div className="flex flex-column cc-line" data-scroll>
                <h2>Key Team Members</h2>
                <div className="flex space-between wrap">
                  <div className="gap">
                    <Image
                      src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628672656/j-waye-covington-D38l260GHc4-unsplash_ic6yq2.jpg"
                      width={640}
                      height={640}
                      alt="j-waye-covington-unsplash"
                      className="a-img"
                    />
                    <h3>Segun Sowunmi</h3>
                    <span>CEO</span>
                  </div>

                  <div>
                    <Image
                      src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628673325/rachel-mcdermott-0fN7Fxv1eWA-unsplash_ujennl.jpg"
                      width={640}
                      height={640}
                      alt="5n6"
                      className="a-img"
                    />
                    <h3>Ferah Dominque</h3>
                    <span>Chief Planner and Architect</span>
                  </div>
                </div>
              </div>
            </AboutGrid>
          </AboutMiddle>
        </m.div>
      </AboutBox>
    </>
  );
}
