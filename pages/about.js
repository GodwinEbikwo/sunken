import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import About from '@/components/about';
import Navigation from '@/components/header';

export default function AboutPage() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title="About" />
      <Navigation />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}>
        <section data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.main
                  variants={fade}
                  className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20">
                  <Container>
                    <About />
                  </Container>
                  <m.aside variants={fade}>
                    <Footer />
                  </m.aside>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
