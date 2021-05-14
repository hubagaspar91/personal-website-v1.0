import style from './Accordion.module.css';
import { Children, cloneElement, ReactElement, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionItemHeader from './AccordionItemHeader';
import AccordionItemBody from './AccordionItemBody';

function Accordion({
  children
}: {
  children: ReactElement[] | ReactElement;
}): ReactElement {
  const [openedIndex, setOpenedIndex] = useState<number>(-1);
  return (
    <ul className={style.root}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openedIndex === index,
          index,
          handleClick: setOpenedIndex
        })
      )}
    </ul>
  );
}

Accordion.propTypes = {
  children: (props, propName, componentName) => {
    const children: ReactElement[] = props[propName];

    let error;
    Children.forEach(children, (child) => {
      if (child.type !== AccordionItem) {
        error = `${componentName} is not of type ${AccordionItem.name}`;
      }
    });
    return error;
  }
};

Accordion.Item = AccordionItem;
Accordion.ItemHeader = AccordionItemHeader;
Accordion.ItemBody = AccordionItemBody;

export default Accordion;
