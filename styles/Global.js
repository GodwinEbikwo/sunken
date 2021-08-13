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
  --golden-ratio: 1.4rem;
  --max-width: 140rem;

  --bg:#0a0a0a;

  --text-white: hsl(200, 12%, 95%);
  --text-black: rgb(18, 18, 18);

  --black: #000;
  --white: #fff;

  --accent-1: #1b1b1b;
  --accent-2: hsl(252, 83%, 87%);
  --accent-3: #001d3d;

  --font: 'CabinetGrotesk', 'Helvetica Neue',  sans-serif;

  --font-xsm: 300;
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --fluid-type-min: 3rem;
  --fluid-type-max: 5rem;
  --fluid-type-target: 5vw;

  --border-color: hsl(206, 6%, 54%);
 
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
  --text-white: #161616;
  --white: #000;
  --border-color: rgba(105, 105, 105, 0.8);
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
    vertical-align: middle; 
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
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: var(--font);
    line-height: 1.3;
    font-size: 1.55rem;
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
      var(--fluid-type-min, 2rem),
      calc(1rem + var(--fluid-type-target, 3.5vw)),
      var(--fluid-type-max, 2.5rem)
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  .space-around {
    justify-content: space-around;
  }

  .block {
    display: block;
  }

  .not-selectable {
    user-select: none;
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


  .link--ersa {
    padding: 0 10px;
  }

  .link--ersa::before {
    top: 50%;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
  }

  .link--ersa:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .link--ersa span {
    display: inline-block;
    /* transition: transform 0.3s var(--easing); */
  }

  .link--ersa:hover span {
    transform: scale3d(1.1, 1.1, 1.1);
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
      object-position: 50% 50%;
      opacity: 0;
      transform: rotate(10deg) scale(1.4);
      transition: opacity 1.2s var(--easing), transform 1.2s var(--easing);
      will-change: transform, opacity;
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
  }

    &.is-inview {
      .img {
        opacity: 1;
        transform: rotate(0deg)  scale(1);
        transition-delay: 0.65s;
    }
  }
}

  .a-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.4);
    transform-origin: 50% 50%;
    transition: opacity 1.2s var(--easing), transform 1.5s var(--easing);
    will-change: transform, opacity;
    /* transform: translate(100%, 0%) rotate(-5deg) scale(1.4);
    transform-origin: 0% 100%; */
  }

   &.is-inview {
    .a-img {
      opacity: 1;
      transform: scale(1);
      transition-delay: 0.65s;
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

.button {
	pointer-events: auto;
	cursor: pointer;
	background: aquamarine;
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	position: relative;
	display: inline-block;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--fenrir {
	background: none;
	padding: 0;
	-webkit-clip-path: circle(50% at 50% 50%);
	clip-path: circle(50% at 50% 50%);
	width: 120px;
	height: 120px;
	font-weight: 700;
	text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
}

.progress {
	position: absolute;
	width: 75px;
	height: 75px;
	top: calc(50% - 37px);
	left: calc(50% - 37px);
	transition: transform 0.4s var(--easing);
}

.button--fenrir:hover .progress {
	transform: scale3d(1.2, 1.2, 1);
}

.progress__circle,
.progress__path {
	fill: none;
	stroke: #f0f0f0;
	stroke-width: 1.5px;
}

.button--fenrir:focus-visible .progress__circle {
	fill: rgba(0,0,0,0.4);
}

.progress__path {
	stroke: var(--border-color);
	stroke-dasharray: 1.5;
	stroke-dashoffset: 1.5;
	transition: stroke-dashoffset 0.4s var(--easing);
}

.button--fenrir:hover .progress__path {
	stroke-dashoffset: 0;
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
