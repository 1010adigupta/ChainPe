let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

export const throwError = (message: any) => {
  store.dispatch();
};
