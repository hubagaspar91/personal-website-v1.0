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
      <video className={style.video} autoPlay muted loop>
        <source src="/video.webm" type="video/webm" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            accumsan fermentum velit, at ullamcorper felis tincidunt vitae. Duis
            libero est, maximus eget ex id, vulputate sodales elit.
          </BodyText>
        </div>
      </Container>
    </div>
  );
}

export default MainHeader;
