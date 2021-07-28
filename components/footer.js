import styled from 'styled-components';
import Container from '@/components/container';
import { FooterBox } from '@/styles/headings';

const FooterLeft = styled.div`
  display: flex;
`;

const FooterRight = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 520px) {
    width: auto;
    margin-left: auto;
  }
`;

export default function Footer() {
  return (
    <FooterBox>
      <Container>
        <div className="border-top py-2">
          <div className="flex flex-wrap">
            <FooterLeft>
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </a>
              <span className="block sm-spacing">&bull;</span>
              <span className="block sm-spacing">
                <a
                  href="https://github.com/samuelgoddard/next-tailwind-motion"
                  target="_blank"
                  rel="noopener noreferrer">
                  Twitter
                </a>
              </span>
              <span className="block sm-spacing">&bull;</span>
              <span className="block sm-spacing">
                <a
                  href="https://twitter.com/samuelgoddard"
                  target="_blank"
                  rel="noopener noreferrer">
                  Facebook
                </a>
              </span>
            </FooterLeft>

            <FooterRight>
              <span className="block">
                Maintained by{' '}
                <a
                  href="https://godwinebikwo.dev"
                  target="_blank"
                  rel="noopener noreferrer">
                  Godwin Ebikwo
                </a>
              </span>
            </FooterRight>
          </div>
        </div>
      </Container>
    </FooterBox>
  );
}
