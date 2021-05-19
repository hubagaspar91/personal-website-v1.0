import { enableStaticRendering } from 'mobx-react';
import UIStore from './UIStore';

const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

export default function initializeStore(): { UIStore: UIStore } {
  return {
    UIStore: new UIStore()
  };
}
