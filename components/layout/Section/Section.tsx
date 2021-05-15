import style from './Section.module.css';
import utilsStyle from '../../../styles/utils.module.css';
import { ReactElement } from 'react';
import Container from '../Container/Container';
import classNames from 'classnames';

type Props = {
  children: any;
  title: string;
  className: string;
};

function Section({ children, title, className }: Props): ReactElement {
  return (
    <Container className={classNames(utilsStyle.section, className)}>
      <h2 className={style.title}>{title}</h2>
      <div>{children}</div>
    </Container>
  );
}

export default Section;
