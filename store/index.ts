import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from './weatherSlice'

export function makeStore() {
  return configureStore({
    reducer: { weather: weatherReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
