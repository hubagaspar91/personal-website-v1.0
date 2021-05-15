import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactElement } from 'react';
import { Provider } from 'mobx-react';
import initializeStore from '../stores';
import Footer from '../components/sections/Footer/Footer';

function MyApp({
  Component,
  pageProps
}: {
  Component: any;
  pageProps: any;
}): ReactElement {
  return (
    <Provider {...initializeStore()}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
