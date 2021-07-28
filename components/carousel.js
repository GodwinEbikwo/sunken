import { useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from 'styled-components';
import Image from 'next/image';
import Container from './container';
import { m, useAnimation } from 'framer-motion';
import { fade, fadeSmallDelay, revealInOut } from '@/helpers/transitions';
import { useInView } from 'react-intersection-observer';
import FancySpan from './fancySpan';

export const Carousel = () => {
   const newControls = useAnimation();
   const { ref, inView } = useInView();
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    loop: true,
    inViewThreshold: 0.65,
  });
  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    if (inView) {
      newControls.start('enter');
    }
    if (!inView) {
      newControls.start('hidden');
    }
  }, [newControls, inView]);

  return (
    <Container>
      <CarouselBox>
        <aside className="flex">
          <m.div
            className="m-auto"
            animate={newControls}
            initial="initial"
            exit="exit">
            <CarouselTitle ref={ref}>
              <FancySpan>
                <m.span variants={revealInOut} className="block">
                  History
                </m.span>
              </FancySpan>
            </CarouselTitle>
            <m.div variants={fadeSmallDelay} ref={ref}>
              <p className="text-center py-2">A look back in time</p>
            </m.div>
          </m.div>
        </aside>

        <aside className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627317608/inside-weather-OzqieLcs464-unsplash_ipy4fb.jpg" />
              </div>
              <div className="embla__slide">
                <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124905/spacejoy-jfVTVARGCao-unsplash_qxae0d.jpg" />
              </div>
              <div className="embla__slide">
                <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1623313208/pexels-cottonbro-6739222_z1sbkh.jpg" />
              </div>
              <div className="embla__slide">
                <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg" />
              </div>
              <div className="embla__slide">
                <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg" />
              </div>
              <div className="embla__slide">
                <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg" />
              </div>
            </div>
          </div>
        </aside>
      </CarouselBox>
    </Container>
  );
};

function ImageWrapper({ src }) {
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
    <m.div
      className="py-2"
      animate={newControls}
      initial="initial"
      exit="exit"
      variants={fadeSmallDelay}
      ref={ref}>
      <Image
        src={src}
        width={960}
        height={640}
        alt="building"
        className="embla__slide__img will-change"
      />
      <div className="py-2">
        <h2 className="embla__slide__title">The lockwood - 2011</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </m.div>
  );
}

const CarouselBox = styled.div`
  margin-top: 6vw;
  margin-bottom: 6vw;
  width: 100%;
`;

const CarouselTitle = styled.h1`
  margin-bottom: var(--spacer-half);
  text-align: center;
  font-size: 7.7vw;
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--text-white);
  font-family: var(--secondary-font);
  font-feature-settings: 'liga', 'clig';
  font-variant-ligatures: common-ligatures;
`;
