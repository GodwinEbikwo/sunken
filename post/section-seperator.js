import styled from 'styled-components';
export default function SectionSeparator() {
  return <Seperator />;
}

const Seperator = styled.div`
  margin-top: 8rem;
  margin-bottom: 6rem;
  width: 100%;
  height: 1px;
  transform-origin: left;
  background: var(--border-color);
`;
