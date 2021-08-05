import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import styled from 'styled-components';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="py-2">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <PostPreviewTitle>
        <Link href={`/posts/${slug}`}>
          <a className="link link--metis">{title}</a>
        </Link>
      </PostPreviewTitle>
      <PostPreviewDate>
        <Date dateString={date} />
      </PostPreviewDate>
      <PostPreviewExcerpt>{excerpt}</PostPreviewExcerpt>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}


const PostPreviewTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: var(--ls-md);
  margin-bottom: 0.75rem;
  line-height: 1.25;
`;

const PostPreviewDate = styled.div`
  margin-bottom: 0.75rem;
`;

const PostPreviewExcerpt = styled.p`
  margin-bottom: 1rem;
`;