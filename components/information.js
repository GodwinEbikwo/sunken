import styled from 'styled-components';
import { useEffect } from 'react';
import { ContainerBox } from './container';
import FancySpan from './fancySpan';
import { revealInOut, fade } from '@/helpers/transitions';
import { m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const gridFade = {
  initial: { opacity: 0, y: 60 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
};

export default function Information() {
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
    <ContainerBox className="has-px">
      <InfoContainer className="has-my">
        <InfoHeader>
          <m.div
            className="flex space-between w-full"
            animate={controls}
            initial="initial"
            exit="exit"
            variants={fade}>
            <InfoTitle ref={ref}>
              <FancySpan>
                <m.span className="block" variants={revealInOut}>
                  Offering a variety
                </m.span>
                <m.span className="block" variants={revealInOut}>
                  of high-end services
                </m.span>
              </FancySpan>
            </InfoTitle>

            {/* <p ref={ref}>
              <FancySpan>
                <m.span variants={revealInOut}>
                  We are a carbon neutral company & cruelty-free <br /> brand
                  with a foucs on ustainable packaging.
                </m.span>
              </FancySpan>
            </p> */}

            {/* <Button>
              <span>learn more</span>
            </Button> */}
          </m.div>
        </InfoHeader>

        {/* <InfoGrid>
          <m.ul
            animate={controls}
            className="services"
            initial="initial"
            exit="exit"
            variants={gridFade}
            ref={ref}>
            <li>
              <img
                loading="lazy"
                width="24"
                height="24"
                src="https://onenil.com/media/pages/home/7f5f63efbb-1624885754/target.svg"
              />
              <h3>Strategy</h3>
              <p>
                Strategy Strategic masterplans and business/concept strategy
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://onenil.com/media/pages/home/f1624e1c2e-1624885752/image-landscape.svg"
                height="24"
                width="24"
              />
              <h3>Concept</h3>
              <p>Award winning concepts and ideas</p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://onenil.com/media/pages/home/2faf4a5ae5-1624885752/film.svg"
                height="24"
                width="24"
              />
              <h3>Strategy</h3>
              <p>High quality campaigns that offer an all-in solution</p>
            </li>

            <li>
              <img
                loading="lazy"
                src="https://onenil.com/media/pages/home/42da5d70e9-1624885754/package.svg"
                height="24"
                width="24"
              />
              <h3>Bespoke</h3>
              <p>Standard of own film production that delivers</p>
            </li>
          </m.ul>
        </InfoGrid> */}
      </InfoContainer>
    </ContainerBox>
  );
}

const Button = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 1.5rem 3rem;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: inherit;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding-left: var(--golden-ratio);
  padding-right: var(--golden-ratio);

  &.has-my {
    margin-top: 6vw;
  }
`;

const InfoGrid = styled.div`
  position: relative;
  padding-top: var(--spacer);

  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    gap: 0;

    & > li {
      border: 1px solid var(--border-color);
      padding: var(--golden-ratio);
      img,
      h3 {
        margin-bottom: var(--spacing-medium);
      }

      p {
        max-width: 250px;
      }
    }
  }
`;

const InfoHeader = styled.aside`
  .info_header_inner {
  }
  p {
    margin-bottom: var(--spacing-medium);
  }
`;

const InfoTitle = styled.h1`
  line-height: 1.2;
  margin-bottom: var(--spacing-medium);
  @media (min-width: 768px) {
    line-height: 1.3;
  }
`;
