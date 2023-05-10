import { type } from 'os'
import React from 'react'

type Props ={
    params:{
        city:string,
        lat:string,
        long:string,

    }
}

const WeatherPage = ({params:{city,lat,long}}:Props) => {
  return (
    <div>This is the weather page {city}</div>
  )
}

export default WeatherPage 