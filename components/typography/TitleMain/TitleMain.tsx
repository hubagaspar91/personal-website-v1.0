import style from './TitleMain.module.css';
import { ReactElement } from 'react';
import classNames from 'classnames';

type Props = {
  children: any;
  tag?: string;
  className?: string;
};

function TitleMain({ children, tag = 'h1', className }: Props): ReactElement {
  const CustomTag = tag as keyof JSX.IntrinsicElements;
  return (
    <CustomTag className={classNames(style.root, className)}>
      {children}
    </CustomTag>
  );
}

export default TitleMain;
