import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function Cta() {
  return (
    <CtaContainer>
      <CtaInner>
        <p className="cta__p">
          Never have to worry about the safety OR QUALITY of the products that
          you choose to put in yout home.
        </p>

        <div className="small-img-cont">
          <Image
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627932917/header-jobs-1920x1080-q72_onv2uu.jpg"
            width={640}
            height={426}
            alt="clay"
            className="a-img"
          />
        </div>

        <CtaTitle>
          At sunken interior, we focus on things <br />
          that are really <span>important</span> to you
          <br />
          your body and your scent
        </CtaTitle>

        <CtaButton className="flex justify-center align-center">
          <Link href="/projects" passHref>
            <button className="button button--fenrir">
              <svg
                aria-hidden="true"
                className="progress"
                width="70"
                height="70"
                viewBox="0 0 70 70">
                <path
                  className="progress__circle"
                  d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                />
                <path
                  className="progress__path"
                  d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                  pathLength="1"
                />
              </svg>
              <span>view</span>
            </button>
          </Link>
        </CtaButton>
      </CtaInner>
    </CtaContainer>
  );
}

const CtaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CtaInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  width: 100%;
  margin: 0 auto;

  .small-img-cont {
    margin: 2.22222rem auto;
    transform-origin: top center;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 999px) {
      width: 66.66667%;
    }

    @media screen and (min-width: 1000px) {
      width: 25.166667vw;
    }
  }

  @media only screen and (max-width: 500px) {
    max-width: 90vw;
  }

  .cta__p {
    max-width: 43.72222rem;
    display: inline-block;
    text-transform: uppercase;
    text-align: center;
  }
`;

const CtaTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: var(--spacer-double);
  font-weight: var(--ls-md);
`;

const CtaButton = styled.div`
  padding-bottom: var(--spacer);
`;
