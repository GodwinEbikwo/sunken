import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Hero from '@/components/hero';
import Line from '@/components/line';
import Work from '@/components/work';
import Layout from '@/components/layout';
import Footer from '@/components/footer';
import Navigation from '@/components/header';
import { fade } from '@/helpers/transitions';
import { ContainerBox } from '@/components/container';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { getAllPostsForHome, getImageForHome } from '@/lib/api';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Services from '@/components/services';
import Cta from '@/components/cta';
import { options } from '@/lib/scroll';

export default function HomePage({ allPosts, homeImage }) {
  const containerRef = useRef(null);
  const workPosts = allPosts.slice(0, 5);
  const homePhoto = homeImage;

  return (
    <Layout>
      <NextSeo title="Home" />
      <Navigation />
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}>
        <section data-scroll-container ref={containerRef} id="scroll-container">
          <aside data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.main>
                  <ContainerBox>
                    <Hero
                      title={homePhoto.title}
                      responsiveImage={homeImage.responsiveImage}
                    />
                    <Line />
                    {workPosts.length > 0 && <Work posts={workPosts} />}
                    <Line />
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

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  const homeImage = (await getImageForHome()) || [];
  return {
    props: { allPosts, homeImage },
  };
}
