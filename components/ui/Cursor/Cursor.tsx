import style from './Cursor.module.css';
import { ReactElement, useEffect, useState, MouseEvent } from 'react';
import classNames from 'classnames';

const images = {
  arrow: '/pixelated-cursor-arrow.svg',
  pointer: '/pixelated-cursor-pointer.svg',
  edit: '/pixelated-cursor-edit.svg'
};

const chooseCursor = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.closest('a, button, *[role="button"]')) {
    return images.pointer;
  } else if (target.closest('input, textarea')) {
    return images.edit;
  } else {
    return images.arrow;
  }
};

function Cursor(): ReactElement {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [cursorImage, setCursorImage] = useState(images.arrow);
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    const setCursor = (e) => {
      setCursorImage(chooseCursor(e));
    };
    const handleMouseMove = (e) => {
      moveCursor(e);
      setCursor(e);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div
      className={style.root}
      style={{ transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)` }}
    >
      <img
        className={classNames(style.image, {
          [style.image__pointer]: cursorImage === images.pointer,
          [style.image__edit]: cursorImage === images.edit
        })}
        src={cursorImage}
        alt="Pixelated pseudo-cursor"
      />
    </div>
  );
}

export default Cursor;
