import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactElement } from 'react';
import { Provider } from 'mobx-react';
import initializeStore from '../stores';
import Footer from '../components/sections/Footer/Footer';
import NavButton from '../components/sections/Nav/NavButton';
import NavMenu from '../components/sections/Nav/NavMenu';
import Cursor from '../components/ui/Cursor/Cursor';

function MyApp({
  Component,
  pageProps
}: {
  Component: any;
  pageProps: any;
}): ReactElement {
  return (
    <Provider {...initializeStore()}>
      <Cursor />
      <NavMenu />
      <NavButton />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
