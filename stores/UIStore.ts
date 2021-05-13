import { action, makeObservable, observable } from 'mobx';

class UIStore {
  mobileMenuOpen = false;

  constructor() {
    makeObservable(this, {
      mobileMenuOpen: observable,
      setMobileMenuOpen: action,
    });
  }

  setMobileMenuOpen(value: boolean): void {
    this.mobileMenuOpen = value;
  }
}

export default UIStore;
