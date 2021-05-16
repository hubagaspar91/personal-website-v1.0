import style from './Section.module.css';
import utilsStyle from '../../../styles/utils.module.css';
import { ReactElement } from 'react';
import Container from '../Container/Container';
import classNames from 'classnames';
import slugify from 'slugify';

type Props = {
  children: any;
  title: string;
  className?: string;
};

function Section({ children, title, className }: Props): ReactElement {
  return (
    <Container className={classNames(utilsStyle.section, className)}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
      <a className={style.anchor} id={slugify(title)} />
      <h2 className={style.title}>{title}</h2>
      <div>{children}</div>
    </Container>
  );
}

export default Section;
