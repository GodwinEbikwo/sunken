import Image from 'next/image';
import styled from 'styled-components';
export default function Avatar({ name, picture }) {
  return (
    <AvatarBox>
      <AvatarBoxInner>
        <Image
          src={picture?.url}
          layout="fill"
          className="rounded-full not-selectable"
          alt={name}
        />
      </AvatarBoxInner>
      <AvatarName>{name}</AvatarName>
    </AvatarBox>
  );
}

const AvatarBox = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarBoxInner = styled.div`
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  align-items: center;
  margin-right: 1rem;
  .rounded-full {
    border-radius: 50%;
  }
`;

const AvatarName = styled.div`
  font-weight: var(--font-md);
  letter-spacing: var(--ls-md);
`;


