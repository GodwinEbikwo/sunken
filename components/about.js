import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { m, useAnimation, LazyMotion, domAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import { revealInOut, fade } from '@/helpers/transitions';
import useOnScreen from '@/helpers/useOnScreen';
import { useInView } from 'react-intersection-observer';
import { SplitText } from '@/helpers/split-text';
import {
  AboutBox,
  AboutIntro,
  AboutMiddle,
  AboutMiddleInner,
  AboutMiddleP,
} from '@/styles/aboutStyles';

export default function About() {
  const controls = useAnimation();
  const newControls = useAnimation();
  const { ref, inView } = useInView();
  const animateRef = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(animateRef);

  useEffect(() => {
    if (inView) {
      newControls.start('enter');
    }

    if (!inView) {
      newControls.start('hidden');
    }
  }, [newControls, inView]);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      controls.start('enter');
    }
    if (!reveal) {
      controls.start('hidden');
    }
  }, [controls, reveal]);

  return (
    <LazyMotion features={domAnimation}>
      <AboutBox>
        <AboutIntro>
          <m.div
            className="ab_intro_inner"
            animate={controls}
            initial="initial"
            exit="exit"
            variants={{
              enter: { transition: { staggerChildren: 0.08, delay: 0.2 } },
            }}>
            <p ref={animateRef}>
              <SplitText
                key
                ref={animateRef}
                initial={{ y: '110%', opacity: 0 }}
                animate="visible"
                exit={{ y: '110%' }}
                variants={{
                  visible: (i) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      ease: [0.77, 0, 0.175, 1],
                      delay: i * 0.015,
                    },
                  }),
                }}>
                At Sunken, we exist to ideate, visualise, and create a new era
                of modern infrastructure. Our team, led by contemporary
                designer, and leader in modern design achitecture interior,
                Segun Sowunmi.
              </SplitText>
            </p>
          </m.div>
        </AboutIntro>

        <AboutMiddle>
          <AboutMiddleInner data-scroll>
            <div className="row" data-scroll>
              <div className="col has-firstchild" data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg"
                  width={409}
                  height={280}
                  alt="5n6"
                  quality="85"
                  className="a-img"
                />
              </div>
              <div className="col" data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625122548/spacejoy-YI2YkyaREHk-unsplash_azlzhu.jpg"
                  width={640}
                  height={640}
                  alt="5n6"
                  quality="85"
                  className="a-img"
                />
              </div>
            </div>
          </AboutMiddleInner>
        </AboutMiddle>

        <AboutMiddle>
          <AboutMiddleP>
            <m.div className="admo" data-scroll>
              <div className="w-full first" data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627588899/amira-aboalnaga-f9O-1eKGlQM-unsplash_kg1rwm.jpg"
                  width={679}
                  height={388}
                  alt="5n6"
                  quality="85"
                  className="a-img"
                />
              </div>

              <m.div
                className="second"
                animate={newControls}
                initial="initial"
                exit="exit"
                style={{
                  transformOrigin: 'translate(0%, 100%)',
                }}
                variants={{
                  enter: { transition: { staggerChildren: 0.08, delay: 0.2 } },
                }}>
                <p ref={ref}>
                  <SplitText
                    initial={{ y: '110%', opacity: 0 }}
                    animate="visible"
                    exit={{ y: '110%' }}
                    variants={{
                      visible: (i) => ({
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 1.3,
                          ease: [0.77, 0, 0.175, 1],
                          delay: i * 0.015,
                        },
                      }),
                    }}>
                    We work together to bring your project one step closer to
                    reality by using creative direction, visualisations, 3D
                    architectural and motion design. If you are looking for an
                    elevated physical or digital experience, we specialise in
                    leading the creative thinking behind your projects to craft
                    awe-inspiring and uniquely desirable experiences.
                  </SplitText>

                  {/* <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      We work together to bring your project one step closer
                    </m.span>
                  </FancySpan>

                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      to reality by using creative direction, 3D architectural
                    </m.span>
                  </FancySpan>

                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      visualisations, and motion design. If you are looking for
                      an
                    </m.span>
                  </FancySpan>

                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      elevated physical or digital experience, we specialise in
                    </m.span>
                  </FancySpan>

                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      leading the creative thinking behind your projects to
                      craft
                    </m.span>
                  </FancySpan>

                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      awe-inspiring and uniquely desirable experiences.
                    </m.span>
                  </FancySpan> */}
                </p>
              </m.div>
            </m.div>
          </AboutMiddleP>
        </AboutMiddle>

        <AboutMiddle>
          <AboutMiddleInner>
            <m.div className="row" variants={fade} data-scroll>
              <div className="col" data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg"
                  width={640}
                  height={640}
                  alt="5n6"
                  quality="85"
                  className="a-img"
                />
              </div>
              <div className="col has-items-end" data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg"
                  width={409}
                  height={488}
                  alt="5n6"
                  quality="85"
                  className="a-img"
                />
              </div>
            </m.div>
          </AboutMiddleInner>
        </AboutMiddle>
      </AboutBox>
    </LazyMotion>
  );
}
