import styled from "styled-components"

export const AboutBox = styled.aside`
  position: relative;
  min-height: 100vh;
  @media (min-width: 600px) {
    margin: -2rem var(--golden-ratio);
  }
`;

export const AboutIntro = styled.div`
  max-width: 100%;
  padding: var(--spacer-half) var(--golden-ratio);
  max-width: 90vw;

  @media (min-width: 800px) {
    /* max-width: 36.5vw; */
    max-width: 100%;
    padding: var(--spacer-half) 4vw;
  }

  .ab_intro_inner {
    @media (min-width: 800px) {
      display: flex;
      justify-content: space-between;
    }

    .ab_intro_one {
      max-width: 36.5vw;

      h1 {
        font-family: var(--Ros);
        font-weight: normal;
        font-size: 3vw;
        line-height: 1.1;
      }
    }

    p {
      @media (min-width: 600px) {
        line-height: 1.4;
      }
    }
  }
`;

export const AboutMiddle = styled.div`
  margin-top: 30px;
  position: relative;
  @media (min-width: 600px) {
    margin-top: 150px;
  }
`;

export const AboutMiddleInner = styled.div`
  max-width: 100%;
  padding: 0 var(--golden-ratio);

  @media (min-width: 600px) {
    .row {
      display: flex;
      flex-wrap: wrap;

      .col {
        width: 50%;
        padding: 0 8px;

        &.has-firstchild {
          &:first-child {
            padding-left: 20%;
          }
        }

        &.has-items-end {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
      }
    }
  }
`;

export const AboutMiddleP = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 var(--golden-ratio);

  .admo {
    @media (min-width: 600px) {
      width: 83.333333%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;

      .w-full {
        width: 100%;
      }

      .first {
        padding-left: var(--golden-ratio);
        padding-right: var(--golden-ratio);
        width: 58.333333%;
      }

      .second {
        padding-left: var(--golden-ratio);
        padding-right: var(--golden-ratio);
        width: 41.666667%;
        p {
          text-align: left;
          margin-left: 0;
          width: auto;
          position: relative;
          line-height: 1.4
        }
      }
    }
  }
`;

export const AboutContentN = styled.div`
  max-width: 100%;
  padding: 0 var(--golden-ratio);
  position: relative;

  .a-c-n {
    @media (min-width: 600px) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 3em;

      & > div {
        width: 50%;
        display: block;
        padding-left: var(--golden-ratio);
        padding-right: var(--golden-ratio);

        h2 {
          font-size: 3vw;
          letter-spacing: normal;
          margin-bottom: var(--spacer-half);
        }

        p {
          padding: var(--golden-ratio) 0;
          line-height: 1.5;
        }

        .arrow-svg {
          width: 20vw;
          height: 20vw;
          padding: 3em;
          border-radius: 50%;
          &.rotate {
            transform: rotate(-180deg);
          }
        }

        &.flip {
          &:first-child {
            order: 2;
          }
        }

        &:last-child {
          padding: 4em 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export const AboutContent = styled.div`
  max-width: 100%;
  padding: 0 var(--golden-ratio);
  position: relative;

  @media (min-width: 600px) {
    .about-content-row {
      display: flex;
      position: relative;

      .about-content-col {
        width: 50%;
        padding: 0 8px 0;
        max-width: 41vw;

        &.right {
          margin-right: 50%;
        }
        &.left {
          margin-left: 50%;
        }

        h2 {
          font-size: 3vw;
          letter-spacing: normal;
          margin-bottom: var(--spacer-half);
        }

        p {
          padding: var(--golden-ratio) 0;
          line-height: 1.5;
        }
      }
    }

    .about-arrow {
      position: absolute;
      top: 0;
    }
  }
`;
