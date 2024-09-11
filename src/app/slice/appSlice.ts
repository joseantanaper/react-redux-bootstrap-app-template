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
  sidebar: { collapsed: 0, mode: 0 },
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
      return state
    },
    toggleSidebar: (state) => {
      // console.log('app', 'toggleSidebar', state)
      const { collapsed } = state.sidebar
      state.sidebar = {
        ...state.sidebar,
        collapsed: !collapsed || collapsed === null || collapsed === 0 ? 1 : 0,
      }
      return state
    },
    toggleSidebarMode: (state) => {
      const { mode } = state.sidebar
      state.sidebar = {
        ...state.sidebar,
        mode: !mode || mode === null || mode === 0 ? 1 : 0,
      }
      return state
    },
    setSidebarMode: (state, action) => {
      console.log(state, action)
      const newMode = action.payload
      state.sidebar = {
        ...state.sidebar,
        mode: newMode,
      }
      return state
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
  }),

  selectors: {
    selectSidebar: (state) => state.sidebar,
    selectSidebarCollapsed: (state) => state.sidebar.collapsed,
    selectSidebarMode: (state) => state.sidebar.mode,
  },
})

export const {
  decrement,
  increment,
  forceCounter,
  toggleTheme,
  toggleSidebar,
  toggleSidebarMode,
  setSidebarMode,
} = appSlice.actions

export const { selectSidebar } = appSlice.selectors

export default appSlice.reducer
