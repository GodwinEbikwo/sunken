import styled from 'styled-components';

export const AboutBox = styled.section`
  position: relative;
  min-height: 100vh;
  margin-top: calc(var(--spacer) * 4);
  @media (min-width: 600px) {
    margin: 0 var(--spacer-half);
  }
`;

export const AboutIntro = styled.aside`
  padding: var(--spacer-half) calc(var(--golden-ratio) + 8px);
  @media (min-width: 768px) {
    max-width: 100%;
    padding: var(--spacer-half) var(--spacer);
  }

  .ab_intro_inner {
    @media (min-width: 768px) {
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
      line-height: 1.4;
      max-width: 40rem;
    }
  }
`;

export const AboutMiddle = styled.div`
  margin-top: 20px;
  position: relative;
  @media (min-width: 600px) {
    margin-top: 150px;
  }
`;

export const AboutMiddleInner = styled.div`
  max-width: 100%;
  padding: 0 var(--golden-ratio);
  position: relative;

  .row {
    position: relative;
    overflow: hidden;
    @media (min-width: 600px) {
      display: flex;
      flex-wrap: wrap;
    }

    .col {
      width: 100%;
      padding: var(--golden-ratio) 8px;

      @media (min-width: 600px) {
        width: 50%;
        padding: 0 8px;
      }

      @media (min-width: 600px) {
        &.has-firstchild {
          &:first-child {
            padding-left: 20%;
          }
        }
      }

      @media (min-width: 600px) {
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
  padding: 0 calc(var(--golden-ratio) + 8px);

  .admo {
    .first,
    .second {
      padding: var(--golden-ratio) 0;
    }

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
        width: 41.666667%;
        p {
          text-align: left;
          margin-left: 0;
          width: auto;
          position: relative;
          line-height: 1.4;
        }
      }
    }
  }
`;
