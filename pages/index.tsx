import Head from 'next/head';
import { ReactElement } from 'react';
import MainHeader from '../components/sections/MainHeader/MainHeader';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
    </div>
  );
}
