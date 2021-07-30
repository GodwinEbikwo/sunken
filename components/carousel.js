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
  const { ref, inView } = useInView({ trackVisibility: true, delay: 250 });
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
                  Selected Work
                </m.span>
              </FancySpan>
            </CarouselTitle>
            {/* <m.div variants={fade} ref={ref}>
              <p className="text-center py-2">
                <FancySpan>
                  <m.span variants={revealInOut} className="block">
                    A look at some of our selected <br />
                    works our client are extremely proud of.{' '}
                  </m.span>
                </FancySpan>
              </p>
            </m.div> */}
          </m.div>
        </aside>

        <m.aside className="embla" variants={fade}>
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
        </m.aside>
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
      <div className="py-2 enmla__slide_content_box">
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
  text-align: center;
  font-size: 10vw;
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: var(--ls-lg);
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 4.5vw;
  }
`;
