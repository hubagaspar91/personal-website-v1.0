import style from './Accordion.module.css';
import { ReactElement } from 'react';
import classNames from 'classnames';

function AccordionItemBody({
  children,
  isOpen
}: {
  children: any;
  isOpen?: boolean;
}): ReactElement {
  return (
    <div
      className={classNames(style.itemBody, { [style.itemBody__open]: isOpen })}
    >
      {children}
    </div>
  );
}

export default AccordionItemBody;
