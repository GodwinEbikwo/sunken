import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { ContainerBox } from '@/components/container';
import Footer from '@/components/footer';
import Navigation from '@/components/header';
import { fade } from '@/helpers/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import MoreStories from '@/post/more-stories';
import HeroPost from '@/post/hero-post';
import { getAllPostsForHome } from '@/lib/api';

export default function FaqPage({ allPosts }) {
  const containerRef = useRef(null);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <NextSeo title="Projects" />
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
                  <ContainerBox className="has-px">
                    {/* <Faq /> */}
                    {heroPost && (
                      <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                      />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                  </ContainerBox>
                  <m.aside variants={fade}>
                    <Footer />
                  </m.aside>
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
  return {
    props: { allPosts },
  };
}
