import '../styles/globals.css';
import { ReactElement } from 'react';
import { Provider } from 'mobx-react';
import initializeStore from '../stores';

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}): ReactElement {
  return (
    <Provider {...initializeStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
