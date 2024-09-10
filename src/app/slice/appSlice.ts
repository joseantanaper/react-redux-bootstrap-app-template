import type { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../createAppSlice'
import type { RootState, AppThunk } from '../store'

export interface AppState {
  counter: number
  theme: 'light' | 'dark' | null
  sidebar: any
  lang: 'es' | 'en'
  count: number
  test: string
}

const initialState: AppState = {
  counter: 0,
  theme: 'light',
  sidebar: { collapsed: 0, pushMode: 0, collapseMode: 0 },
  lang: 'es',
  count: 0,
  test: '',
}

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: (create) => ({
    toggleTheme: (state) => {
      // console.log('app', 'toggleTheme', state)
      state.theme =
        !state || state.theme === null || state.theme === 'light'
          ? 'dark'
          : 'light'
    },
    toggleSidebar: (state) => {
      // console.log('app', 'toggleSidebar', state)
      const { collapsed } = state.sidebar
      state.sidebar = {
        ...state.sidebar,
        collapsed: !collapsed || collapsed === null || collapsed === 0 ? 1 : 0,
      }
    },
    increment: (state) => {
      // console.log('app', 'increment', state)
      state.counter += 1
    },
    decrement: (state) => {
      // console.log('app', 'decrement', state)
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    forceCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    },
    // ??????
    // sidebar: {
    //   setPusMode: create.reducer((state, action) => {
    //     return state
    //   }),
    //   setCollapseMode: create.reducer((state, action) => {
    //     return state
    //   }),
    // },
  }),

  // extraReducers: builder => {
  //   builder
  //     // Handle the action types defined by the `incrementAsync` thunk defined below.
  //     // This lets the slice reducer update the state with request status and results.
  //     .addCase(incrementAsync.pending, state => {
  //       state.status = "loading"
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = "idle"
  //       state.value += action.payload
  //     })
  //     .addCase(incrementAsync.rejected, state => {
  //       state.status = "failed"
  //     })
  // },

  selectors: {
    selectCounter: (app) => app.counter,
  },
})

export const {
  decrement,
  increment,
  forceCounter,
  toggleTheme,
  toggleSidebar,
} = appSlice.actions

export default appSlice.reducer
export const selectCounter = (state: RootState) => state.app.counter

// export const { test, sidebar } = appSlice.actions
