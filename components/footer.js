import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <FooterBox>
      <div className="border-top py-2 px-2">
        <div className="flex align-center space-between flex-wrap">
          <div className="footer-middle">
            ©{new Date().getFullYear()} - Sunken Interior Legal
          </div>
          <button
            aria-label="theme switcher"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <Switcher />
          </button>
          <div className="flex">
            <span className="block">
              <a
                className="link link--metis"
                href="https://godwinebikwo.dev"
                target="_blank"
                rel="noopener noreferrer">
                Developed by Godwin Ebikwo
              </a>
            </span>
          </div>
        </div>
      </div>
    </FooterBox>
  );
}

const Switcher = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--border-color);
  border-radius: 3.125rem;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 1.125rem;
    height: 2.125rem;
    background: var(--white);
  }
`;

export const FooterBox = styled.div`
  position: relative;
  width: 100%;
  text-transform: uppercase;
  min-height: 3rem;
  font-weight: 500;
  /* padding: 0 var(--spacer); */
  margin: 0 auto;
  max-width: var(--max-width);
`;
