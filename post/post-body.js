import markdownStyles from './markdown-styles.module.css';
import styled from "styled-components";

export default function PostBody({ content }) {
  return (
    <PostBox className="px-2">
      <div
        data-scroll
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PostBox>
  );
}


const PostBox = styled.div`
  margin-top: var(--spacer-double);
  max-width: 72rem;
  margin-right: auto;
  margin-left: auto;
`;