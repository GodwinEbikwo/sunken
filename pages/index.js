import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navigation from '@/components/header';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import About from '@/components/about';
import { Carousel } from '@/components/carousel';
import Information from '@/components/information';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title="Home" />
      <Navigation />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}>
        <section data-scroll-container ref={containerRef} id="scroll-container">
          <aside data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.main>
                  <Container>
                    <Hero />
                    <About />
                    <Information />
                    <Carousel />
                    <m.aside variants={fade}>
                      <Footer />
                    </m.aside>
                  </Container>
                </m.main>
              </m.div>
            </LazyMotion>
          </aside>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
