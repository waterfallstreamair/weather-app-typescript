import axios from 'axios'
import { WEATHER_URL, CITIES } from './config'

export const get = async (url) => {
  let res = {}
  try {
    res = await axios.get(url)
  } catch (e) {
    console.log({ e })
  }
  return res.data
}

export const put = async (url, body) => {
  let res = {}
  try {
    res = await axios.put(url, body)
  } catch (e) {
    console.log({ e })
  }
  return res.data
}

const getWeatherUrl = ({ city }) => {
  // prettier-ignore
  return WEATHER_URL
    .replace('{lat}', CITIES[city].lat)
    .replace('{lon}', CITIES[city].lon)
}

export const getWeather = async ({ city }) => {
  const res = await get(getWeatherUrl({ city }))
  console.log({ res, city })
  return res
}
