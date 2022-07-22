import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'
import type { AppState } from './'

export interface WeatherState {
  lastUpdate: number
  data?: object
}

const initialState: WeatherState = {
  lastUpdate: moment().unix(),
  data: null,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.data = action.payload.data
      state.lastUpdate = moment().unix()
    },
  },
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer
