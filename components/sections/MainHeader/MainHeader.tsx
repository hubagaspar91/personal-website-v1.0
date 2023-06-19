import style from './MainHeader.module.css';
import utilsStyle from '../../../styles/utils.module.css';
import TitleMain from '../../typography/TitleMain/TitleMain';
import { ReactElement } from 'react';
import Container from '../../layout/Container/Container';
import BodyText from '../../typography/BodyText/BodyText';
import classNames from 'classnames';

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
            I am a full stack developer based in Budapest with over 7 years of
            experience with modern web technologies and over 2 years of
            experience in EVM dApp development.
          </BodyText>
        </div>
      </Container>
    </div>
  );
}

export default MainHeader;
