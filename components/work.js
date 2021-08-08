import { LazyMotion, domAnimation, m } from 'framer-motion';
import styled from 'styled-components';
import { WorkPreview } from '@/post/post-preview';
import { ContainerBox } from '@/components/container';
import { Button } from '@/styles/headings';

export default function Work({ posts }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial="initial" animate="enter" exit="exit" className="relative">
        <ContainerBox className="has-px has-mw">
          <div className="px-2">
            <WorkTitle>Selected work</WorkTitle>
          </div>
          <WorkGrid>
            {posts.map((post) => (
              <WorkPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                slug={post.slug}
              />
            ))}
          </WorkGrid>

          <div className="flex justify-center align-center py-2">
            <Button>View more</Button>
          </div>
        </ContainerBox>
      </m.div>
    </LazyMotion>
  );
}

const WorkGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 5rem;
  margin-bottom: 8rem;
  padding: var(--spacer-half);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
    row-gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    /* all: unset; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-flow: row wrap;

    & > li {
      vertical-align: middle;
      justify-content: center;

      &:not(:last-child) {
        margin-bottom: calc(var(--spacer) + 5vw);
      }

      &:first-child {
        width: 60%;
        margin-right: 20%;
      }

      &:nth-child(2) {
        width: 55%;
        float: right;
        margin-left: 35%;
      }

      &:nth-child(3) {
        width: 60%;
        float: left;
        margin-right: 20%;
      }
    }
  }
`;

const WorkTitle = styled.h2`
  padding: var(--spacer) 0;
  font-size: 3rem;
  line-height: 1;
  letter-spacing: var(--ls-lg);
  font-weight: var(--font-md);
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
