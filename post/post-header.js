import { m } from 'framer-motion';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import styled from 'styled-components';
import FancySpan from '@/components/fancySpan';
import { SplitText } from '@/helpers/split-text';

export const enterIn = {
  initial: { y: '110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.375,
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '110%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <m.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        enter: { transition: { staggerChildren: 0.09, delay: 0.2 } },
      }}>
      <PostDiv>
        <PostTitle>
          <SplitText
            initial={{ y: '110%', opacity: 0 }}
            animate="enter"
            exit={{ y: '110%' }}
            variants={{
              enter: (i) => ({
                y: '0%',
                opacity: 1,
                transition: {
                  duration: 1.3,
                  ease: [0.77, 0, 0.175, 1],
                  delay: i * 0.05,
                },
              }),
            }}>
            {title}
          </SplitText>
        </PostTitle>

        <PostAvatarBox className="flex flex-column">
          <div className="end">
            <h3>
              <FancySpan>
                <m.span className="block" variants={enterIn}>
                  Residential
                </m.span>
              </FancySpan>
            </h3>
            <h3 />
          </div>
        </PostAvatarBox>

        <PostAvatarBox className="flex flex-column">
          <div className="end">
            <h3>
              <FancySpan>
                <m.span className="block" variants={enterIn}>
                  Designers
                </m.span>
              </FancySpan>
            </h3>
            <h3>
              <FancySpan>
                <m.span className="block" variants={enterIn}>
                  {author.name}
                </m.span>
              </FancySpan>
            </h3>
          </div>
        </PostAvatarBox>

        <PostAvatarBox className="flex flex-column">
          <div className="end">
            <FancySpan>
              <m.span className="block" variants={enterIn}>
                <Date dateString={date} />
              </m.span>
            </FancySpan>
          </div>
        </PostAvatarBox>

        {/* <PostAvatarBox className="flex flex-column">
          <h3 className="next-text">
            <FancySpan>
              <m.span className="block" variants={enterIn}>
                <a className="link link--metis">Next</a>
              </m.span>
            </FancySpan>
          </h3>
        </PostAvatarBox> */}
      </PostDiv>
      <PostImageBox>
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </PostImageBox>
    </m.div>
  );
}

const PostDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);
  padding-left: var(--golden-ratio);
  padding-right: var(--golden-ratio);
`;

const PostAvatarBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-bottom: 3rem;

    .next-text {
      font-size: 3vw;
      font-weight: var(--font-lg);
      line-height: 1;
      letter-spacing: var(--ls-md);
      text-transform: uppercase;
    }

    .end {
      display: flex;
      flex-direction: column;
      align-self: end;
      justify-content: end;
      margin-top: 0.7rem;
      text-transform: uppercase;
    }
  }
`;

const PostImageBox = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    margin-right: 0;
    margin-left: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;
