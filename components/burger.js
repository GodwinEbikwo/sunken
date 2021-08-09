import styled from "styled-components";

export default function Burger ({ open, setOpen }) {
  return (
    <StyledBurger
      title="menu"
      aria-label="hamburger menu"
      open={open}
      onClick={() => setOpen(!open)}>
      <div aria-hidden="true" className="bg-line-top" />
      <div aria-hidden="true" className="bg-line-middle" />
      <div aria-hidden="true" className="bg-line-bottom" />
    </StyledBurger>
  );
};

const StyledBurger = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 1.5px;
    background: ${({ open }) => (open ? '#fff' : 'var(--text-white)')};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 6px;
    will-change: transform;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;