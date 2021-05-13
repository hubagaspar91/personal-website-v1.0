import style from './BodyText.module.css';
import classNames from 'classnames';
import { ReactElement } from 'react';

type Props = {
  children: any;
  tag?: string;
  className?: string;
};

function BodyText({ children, tag = 'p', className }: Props): ReactElement {
  const CustomTag = tag as keyof JSX.IntrinsicElements;
  return (
    <CustomTag className={classNames(className, style.root)}>
      {children}
    </CustomTag>
  );
}

export default BodyText;
