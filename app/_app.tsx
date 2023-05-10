import { AppProps } from 'next/app';
import RootLayout from '../app/layout';
import ProjectLayout from '../app/projects/layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  const isHome = router.pathname === '/';

  // Render the home layout if we are on the home page,
  // and the default layout for all other pages
  const Layout = isHome ? RootLayout : ProjectLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
