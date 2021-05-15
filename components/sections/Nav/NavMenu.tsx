import style from './Nav.module.css';
import { ReactElement, useEffect } from 'react';
import classNames from 'classnames';
import UIStore from '../../../stores/UIStore';
import { inject, observer } from 'mobx-react';
import Container from '../../layout/Container/Container';

function NavMenu({ UIStore }: { UIStore?: UIStore }): ReactElement {
  useEffect(() => {
    console.log(UIStore.mobileMenuOpen);
    if (UIStore.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
    }
  }, [UIStore.mobileMenuOpen]);
  return (
    <nav
      className={classNames(style.menu, {
        [style.menu__open]: UIStore.mobileMenuOpen
      })}
    >
      <Container className={style.menuContainer}>
        <ul className={style.menuList}>
          <li className={style.menuListItem}>00. Work</li>
          <li className={style.menuListItem}>01. About</li>
          <li className={style.menuListItem}>02. Contact</li>
        </ul>
      </Container>
    </nav>
  );
}

export default inject('UIStore')(observer(NavMenu));
