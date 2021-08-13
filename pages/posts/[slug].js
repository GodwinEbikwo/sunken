import { useRef } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import styled from 'styled-components';
import PostBody from '@/post/post-body';
import Footer from '@/components/footer';
import Layout from '@/components/layout';
import PostTitle from '@/post/post-title';
import PostHeader from '@/post/post-header';
import Navigation from '@/components/header';
import { fade } from '@/helpers/transitions';
import MoreStories from '@/post/more-stories';
import markdownToHtml from '@/lib/markdownToHtml';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import Line from '@/components/line';
import { options } from '@/lib/scroll';

export default function Post({ post, morePosts, preview }) {
  const containerRef = useRef(null);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <NextSeo title={post.title} />
      <Navigation />
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}>
        <section data-scroll-container ref={containerRef} id="scroll-container">
          <aside data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.main
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fade}>
                <PostContainerBox>
                  {router.isFallback ? (
                    <div className="center">
                      <PostTitle>Loading…</PostTitle>
                    </div>
                  ) : (
                    <>
                      <m.article>
                        <Head>
                          <meta
                            property="og:image"
                            content={post.ogImage.url}
                          />
                        </Head>
                        <PostHeader
                          title={post.title}
                          coverImage={post.coverImage}
                          date={post.date}
                          author={post.author}
                        />
                        <PostBody content={post.content} />
                      </m.article>
                      <Line className="has-my" />
                      {morePosts.length > 0 && (
                        <MoreStories posts={morePosts} />
                      )}
                    </>
                  )}
                  <Footer />
                </PostContainerBox>
              </m.main>
            </LazyMotion>
          </aside>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.post?.content || '');

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}

const PostContainerBox = styled.div`
  position: relative;
  margin-top: var(--spacer-double);
  margin-left: auto;
  margin-right: auto;
  padding-top: 18vw;
  padding-bottom: var(--spacer-half);
  min-height: 100vh;

  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  @media (min-width: 800px) {
    padding-top: var(--spacer-double);
  }
`;
