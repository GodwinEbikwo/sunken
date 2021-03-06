import Link from 'next/link';
import { useEffect } from 'react';
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { ContainerBox } from '@/components/container';
import { Button } from '@/styles/headings';
import { fade } from '@/helpers/transitions';
import { useInView } from 'react-intersection-observer';
import WorkPreview from './work-preview';

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
        <m.div ref={ref} variants={fade}>
          <ContainerBox className="has-px has-mw">
            <WorkHeader>
              <WorkTitle>Selected work</WorkTitle>
            </WorkHeader>
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
                <button className="button button--fenrir">
                  <svg
                    aria-hidden="true"
                    className="progress"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70">
                    <path
                      className="progress__circle"
                      d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                    />
                    <path
                      className="progress__path"
                      d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                      pathLength="1"
                    />
                  </svg>
                  <span>view</span>
                </button>
              </Link>
            </WorkBtn>
          </ContainerBox>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

const WorkHeader = styled.ul`
  top: var(--spacer-double);
  left: var(--golden-ratio);
  position: absolute;
`;

const WorkTitle = styled.h2`
  padding: var(--spacer) 0;
  line-height: 1;
  letter-spacing: var(--ls-sm);
  font-weight: var(--font-sm);
  text-transform: uppercase;

  &::after {
    height: 1px;
    width: 2.5rem;
    content: '';
    display: block;
    background: var(--white);
    margin-top: 1.01vw;
  }
`;

const WorkGrid = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  gap: 1em;
  margin-bottom: 8rem;
  padding: 8rem 0;

  @media (min-width: 768px) {
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-flow: row wrap; */
    display: grid;
    position: relative;
    margin-bottom: 0.694vw;
    grid-column-gap: 2vw;
    grid-template-columns: repeat(12, 1fr);
    padding: var(--spacer-half);

    & > li {
      vertical-align: middle;
      justify-content: center;

      height: 32.472vw;
      grid-column: 3/11;

      &:not(:last-child) {
        margin-bottom: calc(var(--spacer) + 2.5vw);
      }

      &:nth-child(1) {
        height: 24.569vw;
        grid-column: 3/9;
      }

      &:nth-child(2) {
        height: 21.458vw;
        grid-column: 9/12;
      }

      &:nth-child(4) {
        order: 2;
        height: 24.569vw;
        grid-column: 9/12;
      }

      &:nth-child(5) {
        order: 1;
        height: 21.528vw;
        grid-column: 3/9;
      }

      /* &:nth-child(1) {
        order: 2;
        height: 29.569vw;
        grid-column: 1/8;
      }

      &:nth-child(2) {
        height: 22.528vw;
        grid-column: 7/13;
      }

      &:nth-child(4) {
        order: 3;
        height: 25.569vw;
        grid-column: 7/13;
      }

      &:nth-child(5) {
        order: 1;
        height: 22.528vw;
        grid-column: 3/7;
      } */
    }
  }
`;

const WorkBtn = styled.div`
  padding-bottom: calc(var(--spacer-double) + 2vw);
`;
