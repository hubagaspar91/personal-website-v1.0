import style from './Footer.module.css';
import { ReactElement } from 'react';

function Footer(): ReactElement {
  return (
    <footer className={style.root}>
      <div>
        <div>Made with Next.js</div>
        <div>Hosted on Netlify</div>
      </div>
    </footer>
  );
}

export default Footer;
