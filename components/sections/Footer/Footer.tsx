import style from './Footer.module.css';
import { ReactElement } from 'react';

function Footer(): ReactElement {
  return (
    <footer className={style.root}>
      <a
        href="https://github.com/hubagaspar91"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={style.socialLogo}
          src="/images/github-logo.svg"
          alt="GitHub Logo"
        />
      </a>
      <a
        href="https://twitter.com/huba_gaspar"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={style.socialLogo}
          src="/images/twitter-logo.svg"
          alt="GitHub Logo"
        />
      </a>
      <div>
        <div>Made with Next.js</div>
        <div>Hosted on Netlify</div>
      </div>
    </footer>
  );
}

export default Footer;
