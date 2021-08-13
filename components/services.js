import { useEffect } from 'react';
import styled from 'styled-components';
import Line from './line';
import FancySpan from './fancySpan';
import { m, useAnimation, LazyMotion, domAnimation } from 'framer-motion';
import { revealInOut, fade } from '@/helpers/transitions';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
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
      <m.section
        animate={controls}
        initial="initial"
        exit="exit"
        className="relative">
        <m.div ref={ref} variants={fade} className="relative">
          <ServicesTitle className="py-2">
            <h2>
              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  Services we offer
                </m.span>
              </FancySpan>
            </h2>
          </ServicesTitle>
          <Line />
          <ServicesGrid>
            <div className="grid-col-1">
              <div className="w-full">
                <div className="w-full-inner">
                  <div className="w-full-title">
                    <NumberShape number="1" />
                    <h2>Interior Design</h2>
                  </div>

                  <div className="w-full-para">
                    <p>
                      Our expertise in this area represents a key un-locker of
                      value and underpins the business. Reform has its own,
                      in-house, fully functioning architectural practice and can
                      provide a full range of architectural services from
                      inception through to completion. So whether we are acting
                      for ourselves and our partners, or for third party clients
                      in the traditional way, we can rapidly spot ways of
                      releasing the commercial potential of a project owing to
                      the decades of architectural experience of our team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full-inner">
                  <div className="w-full-title">
                    <NumberShape number="2" />
                    <h2>Development Delivery</h2>
                  </div>

                  <div className="w-full-para">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quibusdam sapiente adipisci ab sequi molestias nihil est
                      ad exercitationem in? Distinctio, rerum. Quibusdam quis
                      mollitia facilis quidem cumque iure ullam tempore
                      temporibus est doloremque, nostrum aliquam fugiat
                      voluptates officiis nesciunt commodi facere dolore
                      consequatur a exercitationem libero labore quo numquam.
                      Veniam vero harum libero amet ullam saepe rerum,
                      consequatur asperiores itaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-col-1">
              <div className="w-full">
                <div className="w-full-inner">
                  <div className="w-full-title">
                    <NumberShape number="3" />
                    <h2>Strategy</h2>
                  </div>

                  <div className="w-full-para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error est tempora quod suscipit beatae ut, molestias culpa
                      vel repudiandae iusto!
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full-inner">
                  <div className="w-full-title">
                    <NumberShape number="4" />
                    <h2>Concept Design</h2>
                  </div>

                  <div className="w-full-para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error est tempora quod suscipit beatae ut, molestias culpa
                      vel repudiandae iusto!
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full-inner">
                  <div className="w-full-title">
                    <NumberShape number="5" />
                    <h2>Bespoke</h2>
                  </div>

                  <div className="w-full-para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error est tempora quod suscipit beatae ut, molestias culpa
                      vel repudiandae iusto!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ServicesGrid>
        </m.div>
      </m.section>
    </LazyMotion>
  );
}
const ServicesTitle = styled.div`
  padding: var(--spacer-double);

  h2 {
    padding: var(--spacer) 0;
    line-height: 1;
    letter-spacing: var(--ls-sm);
    font-weight: var(--font-sm);
    text-transform: uppercase;

    &::after {
      height: 1px;
      width: 2.5rem;
      content: '';
      display: block;
      background: var(--white);
      margin-top: 1.01vw;
    }
  }
`;

const ServicesGrid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  /* border-top: 1px solid var(--border-color); */
  /* border-bottom: 1px solid var(--border-color); */

  .grid-col-1 {
    @media (min-width: 768px) {
      border-right: 1px solid var(--border-color);
      &:last-child {
        border-right: 0;
      }
    }

    .w-full {
      padding: 2rem;
      border-bottom: 1px solid var(--border-color);
      @media (min-width: 768px) {
        padding: 9rem;
        &:last-child {
          border-bottom-width: 0;
        }
      }
    }

    .w-full-inner {
      .w-full-title {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 3rem;
        width: 100%;

        h2 {
          margin-left: 0.5rem;
          letter-spacing: var(--ls-sm);
          font-weight: var(--font-md);
          text-transform: uppercase;
        }
      }

      .w-full-para {
        width: 100%;
        @media (min-width: 768px) {
          width: 91.666667%;
        }
      }
    }
  }
`;

const NumberBox = styled.div`
  margin-right: 0.5rem;
  width: 25px;
  height: 25px;
  background: var(--white);
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  text-align: center;

  span {
    padding: 1.5rem;
    font-weight: 600;
    color: var(--black);
  }
`;
const NumberShape = ({ number }) => (
  <NumberBox className="flex relative text-center align-center justify-center">
    <span className="flex text-center align-center justify-center relative">
      {number}
    </span>
  </NumberBox>
);
