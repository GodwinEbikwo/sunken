import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FooterBox } from '@/styles/headings';
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
          <div className="footer-middle">©2021—SUNKEN BUILDERS Legal</div>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <Switcher />
          </button>
          <div className="flex">
            <span className="block">
              Developed by{' '}
              <a
                href="https://godwinebikwo.dev"
                target="_blank"
                rel="noopener noreferrer">
                Godwin Ebikwo
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
