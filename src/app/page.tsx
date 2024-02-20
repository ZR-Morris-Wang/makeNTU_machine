import React from 'react'
import Map from '../components/Map'
import LaserCutQueueList from '../components/LaserCutQueueList'
import ThreeDPQueueList from "@/components/ThreeDPQueueList"

export default function Home() {
  return (
    <>
      <Map/>
      <LaserCutQueueList/>
      <ThreeDPQueueList/>
    </>
  )
}
