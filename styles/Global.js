import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CabinetGrotesk';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/fonts/CabinetGrotesk-Variable.woff2') format('woff2');
  }

  :root{
  --golden-ratio: 1.35rem;
  --max-width: 142rem;

  --bg:#111;

  --text-white: hsl(200, 12%, 95%);
  --text-black: rgb(18, 18, 18);

  --black: #000;
  --white: #fff;

  --accent-1: #1b1b1b;
  --accent-2: hsl(252, 83%, 87%);
  --accent-3: #001d3d;

  --font: 'CabinetGrotesk', 'Helvetica Neue', sans-serif;
  --font-2: 'CabinetGrotesk', 'Helvetica Neue', sans-serif;

  --font-xsm: 300;
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --fluid-type-min: 3rem;
  --fluid-type-max: 5rem;
  --fluid-type-target: 5vw;

  --btn-bs: 0 4px 14px 0 rgb(0 0 0 / 10%);
  --form-bs: 0 4px 50px 0 rgb(0 0 0 / 18%);

  --border-color: hsl(206, 6%, 54%);
 
  --radii-md: 5px;
  --radii-lg: 30px;

  --ls-xsm: -0.015em;
  --ls-sm: -0.02em;
  --ls-md: -0.03em;
  --ls-lg: -0.05em;

  --spacing-small: 10px;
  --spacing-medium: 20px;
  --spacing-large: 30px;

  --spacer: 2.083vw;
  --spacer-half: 1.041vw;
  --spacer-double: 4.166vw;
  --easing: cubic-bezier(0.215, 0.61, 0.355, 1);  
}

[data-theme="light"] {
  --bg:#fff;
  --text-white: #333;
  --white: #000;
  --border-color: #333;
  --black: #fff
}

html,
  body,
  div,
  button,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  svg,
  img,
  strong,
  ol,
  ul,
  li,
  form,
  aside,
  footer,
  header,
  input,
  optgroup,
  select,
  textarea,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline; 
  }


  html {
    font-size: 62.5%;
    background-color: var(--bg);
    &:not(.has-scroll-init) {
      cursor: wait;
      overflow: hidden;
    }
  }

  body {
    min-height: 100vh;
    width: 100%;
    font-feature-settings: 'kern';
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    font-family: var(--font);
    line-height: 1.3;
    font-size: 1.7rem;
    color: var(--text-white);

    &.no-scroll {
      overflow-y: hidden;
      touch-action: none;
    }
    
    &.loading{
      overflow: hidden;
      height: 100vh;
    }
  }

  li,
  ul {
    list-style: none;
  }

  a {
    text-decoration: inherit;
    color: inherit;
    background-color: transparent;
  }

  h1 {
    font-weight: var(--font-xsm);
    font-family: var(--font-4);
    letter-spacing: var(--ls-md);
    font-size: clamp(
      var(--fluid-type-min, 1rem),
      calc(1rem + var(--fluid-type-target, 3vw)),
      var(--fluid-type-max, 1.3rem)
    );
  }

  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--white);
  }

   .loading-inner {
    position: absolute;
    bottom: 5vw;
    right: 5vw;
  }

  .loading-title {
    text-align: center;
    line-height: 0.85;
    white-space: nowrap;
    font-family: var(--font);
    font-weight: var(--font-lg);
    letter-spacing: var(--ls-lg);
    color: var(--black);

    .m-left {
      margin-left: 0.2em;
      @media (min-width: 768px) {
        margin-left: 0.15em;
      }
    }
  }

  .text-center {
    text-align: center;
  }

  .text_uppercase {
    text-transform: uppercase;
  }

  .m-auto {
     margin: auto;
  }

  .w-full{
    width: 100%;
  }

  .h-full{
    height: 100%;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .mt-auto {
    margin-top: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .flex-column {
    flex-direction: column
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .block {
    display: block;
  }

  .border-top {
    border-top: 1px solid var(--border-color);
  }

  .px-2 {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  .py-2 {
    padding-top: var(--golden-ratio);
    padding-bottom: var(--golden-ratio);
  }

  .inline-block {
    display: inline-block;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sm-spacing {
    --absolute: 0;
    margin-right: calc(0.5rem * var(--absolute));
    margin-left: calc(0.5rem * calc(1 - var(--absolute)));
    display: block;
  }

  .hide-for-mobile {
    @media (max-width: 767px) {
     display: none;
    }
  }

  .hide-for-desktop {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }

  .link::before,
  .link::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .link::before {
    content: '';
  }

  .link--metis {
    text-transform: inherit;
  }

  .link--metis::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  .link--metis:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .b-speed-block {
    position: relative;
  }

  .b-image_wrapper {
    position: relative;
    overflow: hidden;
  }

  .b-image {
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transform: rotate(8deg) scale(1.4);
      transition: opacity 1.2s var(--easing), transform 1.2s var(--easing);
      will-change: transform, opacity;
      transform-origin: 50% 50%;
  }

    &.is-inview {
      .img {
        opacity: 1;
        transform: rotate(0deg)  scale(1);
        transition-delay: 0.5s;
    }
  }
}

  .a-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    /* transform: translate(100%, 0%) rotate(-5deg) scale(1.4);
    transform-origin: 0% 100%; */
    transform: scale(1.4);
    transform-origin: 50% 50%;
    transition: opacity 1.2s var(--easing), transform 1.2s var(--easing);
    will-change: transform, opacity;
  }

   &.is-inview {
    .a-img {
      opacity: 1;
      transform: scale(1);
      transition-delay: 0.475s;
    }
  }

  .bgWrap {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: sticky;
    height: 87vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    @media (min-width: 768px) {
      position: sticky;
      height: 100vh;
    }
    @media (min-width: 1025px) {
      position: fixed;
    }
  }

  .not-selectable {
    user-select: none;
  }

  .embla {
    position: relative;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: pointer;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -html-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -5vw;
  }

.embla__slide {
  position: relative;
  min-width: 65%;
  padding-left: 5vw;

  @media (min-width: 768px) {
    min-width: 60%;
  } 

  @media (min-width: 1024px) {
    min-width: 50%;
  } 
}

.embla__slide__inner {
  position: relative;
  overflow: hidden;
}

.will-change {
  will-change: transform;
}

.embla__slide__img {
  width: 100%;
}

.embla__container {
  h2 {
    font-size: 6.5vw;
    font-weight: 500;
    letter-spacing: var(--ls-lg);
    @media (min-width: 768px) {
      font-size: 2.5vw;
    }
  }

  .embla__slide {
    opacity: .25;
    transition: opacity var(--easing) 300ms !important;

    .enmla__slide_content_box {
      visibility: hidden
    }
  }

  .is-selected {
    opacity: 1;
    .enmla__slide_content_box {
      visibility: visible;
    }
  }
}
`;
