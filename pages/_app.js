import '@/styles/main.css';
import { AnimatePresence, AnimateSharedLayout, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { GlobalStyles } from '@/styles/Global';
import { DefaultSeo } from 'next-seo';
import SEO from '@/helpers/seo.config';
import { MenuStateProvider } from '@/helpers/menuState';
import { useEffect, useState } from 'react';
import Loader from '@/components/loader';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);
  return (
    <>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <MenuStateProvider>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            {loading ? (
              <m.div key="loader">
                <Loader setLoading={setLoading} />
              </m.div>
            ) : (
              <Component {...pageProps} key={router.asPath} />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </MenuStateProvider>
    </>
  );
}
