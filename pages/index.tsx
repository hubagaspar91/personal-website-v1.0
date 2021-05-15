import Head from 'next/head';
import { ReactElement } from 'react';
import MainHeader from '../components/sections/MainHeader/MainHeader';
import MainWork from '../components/sections/MainWork/MainWork';
import Lettuce from '../components/misc/Lettuce/Lettuce';
import MainAbout from '../components/sections/MainAbout/MainAbout';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <MainWork />
      <Lettuce />
      <MainAbout />
    </div>
  );
}
