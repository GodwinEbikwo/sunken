import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { ContainerBox } from '@/components/container';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navigation from '@/components/header';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Services from '@/components/services';
import Cta from '@/components/cta';
import Line from '@/components/line';
import Work from '@/components/work';

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
                  <ContainerBox>
                    <Hero />
                    <Line />
                    <Work />
                    <Services />
                    <Line />
                    <Cta />
                  </ContainerBox>
                  <m.footer variants={fade}>
                    <Footer />
                  </m.footer>
                </m.main>
              </m.div>
            </LazyMotion>
          </aside>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
