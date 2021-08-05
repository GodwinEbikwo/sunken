import styled from 'styled-components';
import { Image } from 'react-datocms';
import Link from 'next/link';

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <div data-scroll data-scroll-speed="-2.5">
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className="not-selectable a-img"
      />
    </div>
  );

  return (
    <div className="mx-auto overflow-hidden" data-scroll>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

const CoverImageBox = styled.div`
  overflow: hidden;
  @media (min-width: 640px) {
    margin-right: 0;
    margin-left: 0;
  }
`;
