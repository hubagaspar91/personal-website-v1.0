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
          width={1008}
          height={924}
          sizes="(max-width: 768px) 500px, (max-width: 1024px) 700px, 1100px"
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
