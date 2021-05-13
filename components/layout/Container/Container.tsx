import style from './Container.module.css';
import { ReactElement } from 'react';
import classNames from 'classnames';

function Container({
  children,
  className,
}: {
  children: any;
  className?: string;
}): ReactElement {
  return (
    <div className={classNames(style.root, className)}>
      <div className={style.content}>{children}</div>
    </div>
  );
}

export default Container;
