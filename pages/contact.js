import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { ContainerBox } from '@/components/container';
import Footer from '@/components/footer';
import Navigation from '@/components/header';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Contact from '@/components/contact';

export default function HomePage() {
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
                  <ContainerBox className="has-mw has-py">
                    <Contact />
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
