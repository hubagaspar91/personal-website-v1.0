import style from './List.module.css';
import { ReactElement } from 'react';
import BodyText from '../../typography/BodyText/BodyText';

function List({ children }: { children: any }): ReactElement {
  return (
    <BodyText tag="ul" className={style.root}>
      {children}
    </BodyText>
  );
}

export default List;
