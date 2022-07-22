import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
import type { NextPage } from 'next'

import { getWeather } from '../requests'
import { Modal } from '../components/modal'
import { Calendar } from '../components/calendar'
import { Tabs } from '../components/tabs'
import Weather from '../components/weather'
import { CITIES, DEFAULT_CITY } from '../config'
import { setWeather } from '../store/weatherSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const Index: NextPage = () => {
  const weather = useAppSelector((state) => state.weather.data)
  const [date, setDate] = useState(new Date())
  const [city, setCity] = useState(DEFAULT_CITY)
  const [modalData, setModalData] = useState({
    isOpen: false,
    text: '',
    title: '',
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      const json = await getWeather({ city })
      dispatch(setWeather({ data: json }))
    })()
  }, [dispatch, city])

  const handleTabChange = useCallback((index: number) => {
    (async () => {
      const cities = Object.keys(CITIES)
      setCity(cities[index])
    })()
  }, [])

  const handleCalendarChange = useCallback((dt: Date) => {
    const index = -moment().subtract(7, 'days').diff(dt, 'days')
    if (index >= 14 || index < 0) {
      setModalData({
        text: 'No data for this date.',
        title: 'No data',
        isOpen: true,
      })
    } else {
      setDate(dt)
    }
  }, [])

  const onClose = useCallback(() => {
    setModalData({ isOpen: false, text: '', title: '' })
  }, [])

  const { isOpen, text, title } = modalData
  return (
    <>
      <h1 className="text-4xl text-slate-700 ml-10 my-10">Weather App</h1>
      <div
        className="flex flex-wrap place-items-start 
          place-content-start ml-10 mb-10 "
      >
        <Tabs tabs={CITIES} onChange={handleTabChange}>
          <Weather weather={weather} date={date} />
        </Tabs>
        <Calendar onChange={handleCalendarChange} />
      </div>
      <Modal isOpen={isOpen} text={text} title={title} onClose={onClose} />
    </>
  )
}

export default Index
