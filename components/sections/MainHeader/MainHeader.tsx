import classNames from 'classnames';
import { ReactElement } from 'react';
import utilsStyle from '../../../styles/utils.module.css';
import Container from '../../layout/Container/Container';
import BodyText from '../../typography/BodyText/BodyText';
import TitleMain from '../../typography/TitleMain/TitleMain';
import style from './MainHeader.module.css';

function MainHeader(): ReactElement {
  return (
    <div className={classNames(style.root, utilsStyle.section)}>
      <video className={style.video} autoPlay muted loop playsInline>
        <source src="/video.webm" type="video/webm" />
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <Container className={style.root}>
        <div className={style.content}>
          <TitleMain className={style.name}>
            <span>My Name Is</span>
            <br />
            <span>Huba Gaspar</span>
          </TitleMain>
          <TitleMain className={style.name__mobile}>
            <span>My</span>
            <br />
            <span>Name Is</span>
            <br />
            <span>Huba</span>
            <br />
            <span>Gaspar</span>
          </TitleMain>
          <BodyText className={style.description}>
            I am a full-stack developer based in Budapest with 9 years of
            experience with modern web technologies, specializing in Web3/EVM
            dApp development for the past 4 years.
          </BodyText>
        </div>
      </Container>
    </div>
  );
}

export default MainHeader;
