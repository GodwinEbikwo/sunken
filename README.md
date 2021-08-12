# Sunken Next Framer Motion Boilerplate

This project was boostrapped with help of : [https://sg-next-tailwind-motion.vercel.app/](https://sg-next-tailwind-motion.vercel.app/)

Demo: [https://sunken.vercel.app/](https://sunken.vercel.app/)

A simple [Next.js](https://nextjs.org/) boilerplate with [Framer Motion 4](https://www.framer.com/motion/) (With [LazyMotion](https://www.framer.com/api/motion/lazy-motion/), [Framer Motion](https://www.framer.com/motion/), and a few other nice bits preconfigured.

## ✨ Features

- [Next](https://nextjs.org/) 11
- [Framer Motion 4](https://www.framer.com/motion/) (With [LazyMotion](https://www.framer.com/api/motion/lazy-motion/) setup for smaller bundle sizes)
- [Preact](https://preactjs.com/) preconfigured instead of React for smaller bundle size\*
- SEO preconfigured with [next-seo](https://github.com/garmeeh/next-seo)
- [Module Aliasing](https://nextjs.org/docs/advanced-features/module-path-aliases) preconfigured with `jsconfig.json`
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) preconfigured for smooth, lerp based page scrolling
- Out the box 100 scores on both mobile &amp; desktop on [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsg-next-tailwind-motion-locomotive.vercel.app%2F&tab=mobile)

_\*To remove Preact and switch back to React simply remove the code in `next.config.js`_

## 🚀 Quick start

1.  **Clone the repo**

    ```sh
    git clone https://github.com/godwinebikwo/sunken.git
    ```

2.  **Start developing**

    Navigate into your new site’s directory and install the local dependencies first, then run the dev command.

    ```sh
    cd sunken/

    npm i
    npm run dev
    ```

3.  **Open the source code and start editing!**

    Your site is will be running at `http://localhost:3000`

## 🗄 Directory Structure

```
|-- components
    |-- container.js *// A simple container component to wrap areas in a max width*
    |-- fancyLink.js *// A simple wrapper around `next/link`
    |-- footer.js *// Example footer component*
    |-- header.js *// Example header component*
    |-- layout.js *// Layout component that can be used to wrap your pages in a global layout*
    |-- AND MORE
|-- helpers
    |-- seo.config.js *// default SEO configuration helper, imported in `pages/_app.js`*
    |-- transitions.js *// re-usable framer motion transition helper with a basic 'fade' transition to get started*
|-- pages
    |-- _app.js *// Includes default SEO component, Framer motion AnimatePresence & Locomotive Scroll init*
    |-- _document.js *// Default Next document component*
    |-- about.js
    |-- index.js
|-- public *// Next public assets*
|-- styles
    |-- _locomotive.css *// custom locomotive scroll styles*
    |-- _fonts.css *// custom webfont styles*
    |-- _typography.css *// custom typographical styles*
    |-- main.css *// Tailwind init and custom css imports*
|-- .gitignore
|-- jsconfig.json *// module aliasing*
|-- postcss.config.js *// Tailwind, CSS import, CSS nesting init*
|-- next.config.js *// Prefer Preact to React*
|-- package.json
|-- README.md
|-- tailwind.config.js
```
