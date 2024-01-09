import { configureStore } from '@reduxjs/toolkit';
import layout from './layoutState/reducers';
import infra from './infraState/reducers'

const store = configureStore({
  reducer: {
    layout,
    infra
  },
  preloadedState: {},
})

export default store;
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch