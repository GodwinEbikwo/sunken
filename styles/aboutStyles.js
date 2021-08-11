import styled from 'styled-components';

export const AboutBox = styled.section`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: calc(var(--spacer-double) * 2);
  padding-left: var(--golden-ratio);
  padding-right: var(--golden-ratio);

  @media (min-width: 600px) {
    margin-bottom: var(--spacer);
  }

  @media (min-width: 1024px) {
    padding-top: var(--spacer);
  }
`;

export const AboutIntro = styled.aside`
  padding: var(--spacer-half) var(--golden-ratio);
  @media (min-width: 768px) {
    max-width: 100%;
    padding: var(--golden-ratio);
  }
`;

export const AboutMiddle = styled.div`
  margin-top: 20px;
  position: relative;
  padding: var(--spacer-half) var(--golden-ratio);
  @media (min-width: 600px) {
    margin-top: 70px;
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
  padding: 0 var(--golden-ratio);

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

export const AboutGrid = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    gap: 1em;
  }

  .firs-col {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .cc {
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;

    p {
      margin-top: var(--golden-ratio);
      margin-bottom: var(--golden-ratio);
      line-height: 1.4;
      @media (min-width: 1024px) {
        max-width: 40rem;
        text-transform: uppercase;
      }
    }
  }

  .cc-line {
    border-top: 1px solid var(--border-color);
    h2 {
      font-size: 2vw;
      margin-top: var(--golden-ratio);
      margin-bottom: var(--golden-ratio);
      text-transform: uppercase;
    }

    h3 {
      margin-top: var(--golden-ratio);
      font-size: 2vw;
      text-transform: uppercase;
    }
    
    span {
      text-transform: uppercase;
    }

    .gap {
      padding-right: var(--golden-ratio);
    }
  }
`;
