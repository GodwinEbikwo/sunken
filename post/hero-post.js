import styled from 'styled-components';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { ContainerBox } from '@/components/container';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <ContainerBox className="has-px">
      <HeroPostInner>
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </HeroPostInner>

      <HeroPostGrid>
        <aside className="hpg-left">
          <h3 className="hpg-left-title">
            <Link href={`/posts/${slug}`}>
              <a className="link link--metis">{title}</a>
            </Link>
          </h3>

          <div className="hpg-left-middle">
            <p className="hpg-left-para">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>

          <div className="hpg-left-inner">
            <Date dateString={date} />
          </div>
        </aside>
      </HeroPostGrid>
    </ContainerBox>
  );
}

const HeroPostInner = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const HeroPostGrid = styled.div`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
  }

  /* @media (min-width: 1024px) {
    column-gap: 2rem;
  } */

  .hpg-left {
    .hpg-left-title {
      font-size: 2.25rem;
      font-weight: var(--font-md);
      letter-spacing: var(--ls-md);
      @media (min-width: 1024px) {
        font-size: 4rem;
      }
    }

    .hpg-left-middle {
      margin-bottom: 1rem;
      .hpg-left-para {
        margin-bottom: 1rem;
      }
    }

    .hpg-left-inner {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
`;
