import { ContainerBox } from '@/components/container';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { getAllPostsForHome } from '@/lib/api';
import styled from 'styled-components';
import PostPreview from '@/post/post-preview';

export default function Work({ allPosts }) {
  const workPost = allPosts;
  console.log(workPost);
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial="initial" animate="enter" exit="exit" className="relative">
        <ContainerBox className="has-px">
          <WorkGrid>
            {workPost.slice(0, 2).map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </WorkGrid>
        </ContainerBox>
      </m.div>
    </LazyMotion>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 5rem;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
  }

  @media (min-width: 1024px) {
    column-gap: 8rem;
  }
`;
