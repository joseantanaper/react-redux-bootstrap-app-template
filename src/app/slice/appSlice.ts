import type { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../createAppSlice'
import type { AppThunk } from '../store'

export interface AppSliceState {
  theme: 'light' | 'dark'
  sidebar: 0 | 1 | 2
  lang: 'es' | 'en'
  count: number
  test: string
}

const initialState: AppSliceState = {
  theme: 'light',
  sidebar: 0,
  lang: 'es',
  count: 0,
  test: '',
}

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: (create) => ({
    test: create.reducer((state) => {
      return state
    }),
  }),
  selectors: {},
})

export const { test } = appSlice.actions
