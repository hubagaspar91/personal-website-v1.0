import style from './Section.module.css';
import utilsStyle from '../../../styles/utils.module.css';
import { ReactElement } from 'react';
import Container from '../Container/Container';

type Props = {
  children: any;
  title: string;
};

function Section({ children, title }: Props): ReactElement {
  return (
    <Container className={utilsStyle.section}>
      <h2 className={style.title}>{title}</h2>
      <div>{children}</div>
    </Container>
  );
}

export default Section;
