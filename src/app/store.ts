import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
// import { counterSlice } from './sliceSamples/counterSlice'
// import { quotesApiSlice } from './sliceSamples/quotesApiSlice'
import { appSlice } from './slice/appSlice'

// Persist
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'

//import localStorage from 'redux-persist/lib/storage'
import sessionStorage from 'redux-persist/lib/storage/session'

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(appSlice)
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer> // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  version: 1,
  storage: sessionStorage, // sessionStorage
  // whitelist: ['app'], // slices managed by "redux-persist"
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    devTools: true,
    //reducer: rootReducer,
    reducer: persistedReducer,
    // Needed for redux-persist
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        },
      }),
  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)

  return store
}

export const store = makeStore()
export const persistor = persistStore(store)

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
