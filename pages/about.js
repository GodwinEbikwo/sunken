import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import Container from '@/components/container';
import { fade } from '@/helpers/transitions';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import About from '@/components/about';
import Navigation from '@/components/header';
import Footer from '@/components/footer';

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
          <aside data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.main>
                  <Container className="has-mx has-px">
                    <About />
                  </Container>
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
