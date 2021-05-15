import style from './Nav.module.css';
import { ReactElement } from 'react';
import TitleMain from '../../typography/TitleMain/TitleMain';
import UIStore from '../../../stores/UIStore';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';

function NavButton({ UIStore }: { UIStore?: UIStore }): ReactElement {
  return (
    <div className={style.root}>
      <button
        onClick={() => UIStore.setMobileMenuOpen(!UIStore.mobileMenuOpen)}
      >
        <TitleMain
          className={classNames(style.button, {
            [style.button__clicked]: UIStore.mobileMenuOpen
          })}
        >
          Menu
        </TitleMain>
      </button>
    </div>
  );
}

export default inject('UIStore')(observer(NavButton));
