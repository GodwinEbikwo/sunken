import '@/styles/main.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { GlobalStyles } from '@/styles/Global';
import { DefaultSeo } from 'next-seo';
import SEO from '@/helpers/seo.config';
import { MenuStateProvider } from '@/helpers/menuState';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <MenuStateProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </MenuStateProvider>
    </>
  );
}
