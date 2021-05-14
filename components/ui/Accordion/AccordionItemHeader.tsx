import style from './Accordion.module.css';
import { ReactElement, KeyboardEvent } from 'react';

function AccordionItemHeader({
  children,
  isOpen,
  handleClick,
  index
}: {
  children: any;
  isOpen?: boolean;
  handleClick?: () => any;
  index?: number;
}): ReactElement {
  const handleKeyDown = (e: KeyboardEvent) =>
    e.key === 'Enter' ? handleClick() : null;
  return (
    <div
      tabIndex={index}
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={style.itemHeader}
    >
      {children}{' '}
      <span className={style.itemHeaderIcon}>{isOpen ? '↑' : '↓'}</span>
    </div>
  );
}

export default AccordionItemHeader;
