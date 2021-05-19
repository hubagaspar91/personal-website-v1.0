import Head from 'next/head';
import { ReactElement } from 'react';
import MainHeader from '../components/sections/MainHeader/MainHeader';
import MainWork from '../components/sections/MainWork/MainWork';
import Lettuce from '../components/misc/Lettuce/Lettuce';
import MainAbout from '../components/sections/MainAbout/MainAbout';
import MainSlideshow from '../components/sections/MainSlideshow/MainSlideshow';
import MainContact from '../components/sections/MainContact/MainContact';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Huba Gaspar | Creative Full Stack Developer</title>
        <meta
          name="og:title"
          content="Huba Gaspar | Creative Full Stack Developer"
        />
        <meta name="og:url" content="https://hubagaspar.com/" />
        <meta name="og:image" content="https://hubagaspar.com/site_og.jpg" />
        <meta
          name="og:description"
          content="I am a creative full stack developer based in Budapest with over 5
            years of experience with modern web technologies."
        />
        <meta
          name="description"
          content="I am a creative full stack developer based in Budapest with over 5
            years of experience with modern web technologies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <MainWork />
      <Lettuce />
      <MainAbout />
      <MainSlideshow />
      <MainContact />
    </div>
  );
}
