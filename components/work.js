import Link from 'next/link';
import { useEffect } from 'react';
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { WorkPreview } from '@/post/post-preview';
import { ContainerBox } from '@/components/container';
import { Button } from '@/styles/headings';
import { fadeSmallDelay } from '@/helpers/transitions';
import { useInView } from 'react-intersection-observer';

export default function Work({ posts }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
      if (inView) {
        controls.start('enter');
      }
      if (!inView) {
        controls.start('hidden');
      }
    }, [controls, inView]);
  
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial="initial" animate="enter" exit="exit" className="relative">
        <m.div ref={ref} variants={fadeSmallDelay}>
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

            <WorkBtn className="flex justify-center align-center">
              <Link href="/projects" passHref>
                <Button>View more</Button>
              </Link>
            </WorkBtn>
          </ContainerBox>
        </m.div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-flow: row wrap;

    & > li {
      vertical-align: middle;
      justify-content: center;

      &:not(:last-child) {
        margin-bottom: calc(var(--spacer) + 2.5vw);
      }

      &:first-child {
        width: 60%;
        margin-right: 30%;
      }

      &:nth-child(2) {
        width: 55%;
        float: right;
        margin-left: 45%;
      }

      &:nth-child(3) {
        width: 60%;
        float: left;
        margin-right: 30%;
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

const WorkBtn = styled.div`
  padding-bottom: calc(var(--spacer-double) + 2vw);
`;
