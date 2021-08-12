import styled from 'styled-components';
import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <MoreSoriesBox className="px-2 mx-auto relative">
      <MoreTitle>More Stories</MoreTitle>
      <MoreGrid>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </MoreGrid>
    </MoreSoriesBox>
  );
}

const MoreSoriesBox = styled.div`
  max-width: var(--max-width);
`;

const MoreTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  line-height: 1;
  font-weight: var(--font-lg);
  letter-spacing: var(--ls-md);
  margin-bottom: 2rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    text-align: left;
    line-height: 1;
  }
`;

const MoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 5rem;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
  }

  @media (min-width: 1024px) {
    column-gap: 8rem;
  }
`;
