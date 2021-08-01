import styled from 'styled-components';
import { useEffect } from 'react';
import { ContainerBox } from './container';
import FancySpan from './fancySpan';
import { revealInOut } from '@/helpers/transitions';
import { m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      <InfoContainer>
        <InfoGrid className="align-middle">
          <InfoLeft>
            <div className="info__left__inner">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124905/spacejoy-jfVTVARGCao-unsplash_qxae0d.jpg"
                alt="fivensix"
              />
            </div>
          </InfoLeft>

          <InfoRight>
            <m.div
              className="info__right__inner"
              animate={controls}
              initial="initial"
              exit="exit">
              <InfoTitle ref={ref}>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    Earth friendly &
                  </m.span>
                  <m.span className="block" variants={revealInOut}>
                    ethically-conscious
                  </m.span>
                </FancySpan>
              </InfoTitle>
              <p>
                We are a carbon neutral company & products and certified
                cruelty-free brand with a foucs on ustainable packaging.
              </p>

              <Button>
                <span>learn more</span>
              </Button>
            </m.div>
          </InfoRight>
        </InfoGrid>
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
  margin-top: 6vw;
  margin-bottom: 6vw;
`;

const InfoGrid = styled.div`
  position: relative;
  display: grid;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const InfoLeft = styled.aside`
  @media (max-width: 767px) {
    grid-area: 1 / 1 / 2 / 2;
  }

  .info__left__inner {
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const InfoRight = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 767px) {
    grid-area: 2 / 1 / 3 / 2;
  }

  .info__right__inner {
    max-width: 488px;
  }

  p {
    margin-bottom: var(--spacer);
  }
`;

const InfoTitle = styled.h1`
  line-height: 1.2;
  margin-bottom: var(--spacer);
  @media (min-width: 768px) {
    line-height: 1;
  }
`;
