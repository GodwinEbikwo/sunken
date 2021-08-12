import styled from 'styled-components';
import CoverImage from '@/post/cover-image';
import Link from 'next/link';

export default function WorkPreview({ title, coverImage, slug }) {
  return (
    <ProjectContainer>
      <Link href={`/posts/${slug}`}>
        <ProjectLink aria-label={`read more about ${title}`}>
          <div className="img-container">
            <CoverImage
              slug={slug}
              title={title}
              responsiveImage={coverImage.responsiveImage}
            />
            <div className="img-c-center">
              <div className="img-icon" />
              <p className="img-txt">View</p>
            </div>
          </div>
          <ProjectInfoContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectReadMore>
              <a
                aria-label={`read more about ${title}`}
                className="link link--metis">
                Read more
              </a>
            </ProjectReadMore>
          </ProjectInfoContainer>
        </ProjectLink>
      </Link>
    </ProjectContainer>
  );
}

export const ProjectContainer = styled.li`
  .img-container {
    display: inline-block;
    overflow: hidden;

    &:hover .img-txt {
      opacity: 1;
    }

    &:hover .img-icon {
      opacity: 1;
      transform: scale(1.6);

      &:hover {
        transform: scale(2.3);
      }
    }
  }

  .img-c-center {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    justify-content: center;
    display: grid;
    align-items: center;
    transition: all 1s var(--easing);

    .img-icon {
      grid-row: 1;
      grid-column: 1;
      border-radius: 50%;
      margin: 0 auto;
      background-color: var(--accent-1);
      width: 4rem;
      height: 4rem;
      transition: all 1s var(--easing);
      opacity: 0;
      z-index: 0;
    }

    .img-txt {
      grid-row: 1;
      grid-column: 1;
      color: white;
      opacity: 0;
      transition: all 1s var(--easing);
      z-index: 1;
      text-align: center;
      vertical-align: middle;
      letter-spacing: var(--ls-sm);
    }
  }
`;

const ProjectLink = styled.a`
  position: relative;
  max-width: 100%;

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--golden-ratio);
  padding-bottom: var(--golden-ratio);
`;

const ProjectReadMore = styled.h3`
  letter-spacing: var(--ls-sm);
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  width: 190px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
