import style from './Nav.module.css';
import { ReactElement, useEffect } from 'react';
import classNames from 'classnames';
import UIStore from '../../../stores/UIStore';
import { inject, observer } from 'mobx-react';
import Container from '../../layout/Container/Container';
import slugify from 'slugify';
import { SectionTitles } from '../../../constants/SectionTitles';

function NavMenu({ UIStore }: { UIStore?: UIStore }): ReactElement {
  useEffect(() => {
    setTimeout(() => {
      if (UIStore.mobileMenuOpen) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = null;
      }
    }, 600);
  }, [UIStore.mobileMenuOpen]);
  const handleClick = () => UIStore.setMobileMenuOpen(false);
  return (
    <nav
      className={classNames(style.menu, {
        [style.menu__open]: UIStore.mobileMenuOpen
      })}
    >
      <Container className={style.menuContainer}>
        <ul className={style.menuList}>
          <li className={style.menuListItem}>
            <a
              onClick={handleClick}
              href={`#${slugify(SectionTitles.SECTION00)}`}
            >
              {SectionTitles.SECTION00}
            </a>
          </li>
          <li className={style.menuListItem}>
            <a
              onClick={handleClick}
              href={`#${slugify(SectionTitles.SECTION01)}`}
            >
              {SectionTitles.SECTION01}
            </a>
          </li>
          <li className={style.menuListItem}>
            <a
              onClick={handleClick}
              href={`#${slugify(SectionTitles.SECTION02)}`}
            >
              {SectionTitles.SECTION02}
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default inject('UIStore')(observer(NavMenu));
