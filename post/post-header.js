import { m } from 'framer-motion';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import styled from 'styled-components';
import { fade, revealInOut } from '@/helpers/transitions';
import FancySpan from '@/components/fancySpan';
import { SplitText } from '@/helpers/split-text';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <m.div variants={fade}>
      <PostDiv>
        <PostTitle>
          <SplitText
            initial={{ y: '130%', opacity: 0 }}
            animate="enter"
            exit={{ y: '130%' }}
            variants={{
              enter: (i) => ({
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  ease: [0.77, 0, 0.175, 1],
                  delay: i * 0.02,
                },
              }),
            }}>
            {title}
          </SplitText>
        </PostTitle>

        <PostAvatarBox className="flex align-center justify-center">
          <Avatar name={author.name} picture={author.picture} />
        </PostAvatarBox>
      </PostDiv>

      <PostImageBox>
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </PostImageBox>

      <PostDiv>
        <PostAvatarContainer className="mx-auto">
          <div className="pac-left block">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="pac-right flex align-center justify-center">
            <Date dateString={date} />
          </div>
        </PostAvatarContainer>
      </PostDiv>
    </m.div>
  );
}

const PostDiv = styled.div`
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
    margin-bottom: 3rem;
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
const PostAvatarContainer = styled.div`
  .pac-left {
    margin-bottom: var(--golden-ratio);
    @media (min-width: 768px) {
      display: none;
    }
  }

  .pac-right {
    margin-bottom: var(--golden-ratio);
  }
`;
