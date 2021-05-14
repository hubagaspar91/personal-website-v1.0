import style from './Accordion.module.css';
import { Children, cloneElement, ReactElement } from 'react';
import AccordionItemHeader from './AccordionItemHeader';
import AccordionItemBody from './AccordionItemBody';

function AccordionItem({
  children,
  isOpen,
  handleClick,
  index
}: {
  children: ReactElement[];
  isOpen?: boolean;
  handleClick?: (index: number) => any;
  index?: number;
}): ReactElement {
  const toggleClick = () => (isOpen ? handleClick(-1) : handleClick(index));
  return (
    <li className={style.item}>
      {Children.map(children, (child) =>
        child.type === AccordionItemHeader
          ? cloneElement(child, {
              isOpen,
              handleClick: toggleClick
            })
          : cloneElement(child, { isOpen })
      )}
    </li>
  );
}

AccordionItem.propTypes = {
  children: (props, propName) => {
    const children: ReactElement[] = props[propName];

    if (Children.count(children) !== 2) {
      return new Error('Must have exactly 2 children.');
    }

    if (
      children[0].type !== AccordionItemHeader ||
      children[1].type !== AccordionItemBody
    ) {
      return new Error(
        `First child must be ${AccordionItemHeader.name}, and second must be ${AccordionItemBody.name}`
      );
    }
  }
};

export default AccordionItem;
