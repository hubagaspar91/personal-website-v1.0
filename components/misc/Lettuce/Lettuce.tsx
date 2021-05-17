import Image from 'next/image';
import style from './Lettuce.module.css';
import utilsStyle from '../../../styles/utils.module.css';
import classNames from 'classnames';
import { ReactElement } from 'react';
import Container from '../../layout/Container/Container';
import TitleMain from '../../typography/TitleMain/TitleMain';

function Lettuce(): ReactElement {
  return (
    <Container className={classNames(style.root, utilsStyle.section)}>
      <div className={style.image}>
        <Image
          className={style.image}
          src="/images/lettuce.jpg"
          width={545.46}
          height={500}
          quality={65}
          layout="responsive"
        />
      </div>
      <div className={style.titleContainer}>
        <TitleMain>
          <span className={style.title}>
            I am <span className={style.titleOutline}>not</span>
          </span>
          <br />
          <span className={style.title}>
            A <span className={style.titleOutline}>designer</span>
          </span>
        </TitleMain>
      </div>
    </Container>
  );
}

export default Lettuce;
