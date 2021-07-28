import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { m, useAnimation } from 'framer-motion';
import FancySpan from './fancySpan';
import { revealInOut, fade } from '@/helpers/transitions';
import useOnScreen from '@/helpers/useOnScreen';
import { useInView } from 'react-intersection-observer';
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
          {/* <div className="ab_intro_one">
            <h1>
              <FancySpan>
                <m.span className="block">
                  At Sunken, we exist to ideate,
                </m.span>
                <m.span className="block">visualise, and create a new</m.span>
                <m.span className="block">era of modern infrastructure.</m.span>
              </FancySpan>
            </h1>
          </div> */}

          <div>
            <p ref={animateRef}>
              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  At Sunken, we exist to ideate, visualise, and create
                </m.span>
              </FancySpan>

              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  a new era of modern infrastructure. Our in-house team,
                </m.span>
              </FancySpan>

              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  led by contemporary designer, and leader in modern
                </m.span>
              </FancySpan>

              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  design achitecture, Segun Sowunmi. We work together
                </m.span>
              </FancySpan>

              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  to bring your project one step closer to reality by using
                </m.span>
              </FancySpan>

              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  creative direction, 3D visualisations and motion design.
                </m.span>
              </FancySpan>
            </p>
          </div>
        </m.div>
      </AboutIntro>

      <AboutMiddle>
        <AboutMiddleInner>
          <div className="row" data-scroll>
            <div className="col has-firstchild" data-scroll>
              <Image
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg"
                width={409}
                height={280}
                alt="5n6"
                quality="85"
                className="img"
              />
            </div>
            <div className="col" data-scroll>
              <Image
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625122548/spacejoy-YI2YkyaREHk-unsplash_azlzhu.jpg"
                width={640}
                height={640}
                alt="5n6"
                quality="85"
                className="img"
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
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg"
                width={679}
                height={388}
                alt="5n6"
                quality="85"
                className="img"
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
                <FancySpan>
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
                    visualisations, and motion design. If you are looking for an
                  </m.span>
                </FancySpan>

                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    elevated physical or digital experience, we specialise in
                  </m.span>
                </FancySpan>

                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    leading the creative thinking behind your projects to craft
                  </m.span>
                </FancySpan>

                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    awe-inspiring and uniquely desirable experiences.
                  </m.span>
                </FancySpan>
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
                className="img"
              />
            </div>
            <div className="col has-items-end" data-scroll>
              <Image
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg"
                width={409}
                height={488}
                alt="5n6"
                quality="85"
                className="img"
              />
            </div>
          </m.div>
        </AboutMiddleInner>
      </AboutMiddle>
    </AboutBox>
  );
}