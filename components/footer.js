import { ContainerBox } from '@/components/container';
import { FooterBox } from '@/styles/headings';

export default function Footer() {
  return (
    <FooterBox>
      <ContainerBox>
        <div className="border-top py-2">
          <div className="flex space-between flex-wrap">
            <div className="footer-middle">©2021—SUNKEN BUILDERS Legal</div>

            <div className="flex">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <span className="block sm-spacing">&bull;</span>
              <span className="block sm-spacing">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </span>
              <span className="block sm-spacing">&bull;</span>
              <span className="block sm-spacing">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Contact
                </a>
              </span>
            </div>

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
      </ContainerBox>
    </FooterBox>
  );
}
