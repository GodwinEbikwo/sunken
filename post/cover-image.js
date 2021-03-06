import { Image } from 'react-datocms';
import Link from 'next/link';

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <div data-scroll data-scroll-speed="-0.8">
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

export function WorkImage({ title, responsiveImage }) {
  const image = (
    <div data-scroll data-scroll-speed="-0.8">
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
      {image}
    </div>
  );
}

export function HeroImage({ title, responsiveImage }) {
  const image = (
    <div data-scroll data-scroll-speed="-1.5">
      <Image
        data={{
          ...responsiveImage,
          alt: `${title}`,
        }}
        className="not-selectable a-img"
      />
    </div>
  );

  return (
    <div className="mx-auto overflow-hidden" data-scroll>
      {image}
    </div>
  );
}
