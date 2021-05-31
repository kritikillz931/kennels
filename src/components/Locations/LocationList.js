import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Locations"
import "./Locations.css"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
    <section className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return (
            <Location LocationProp={location}/>
          )
        })
      }
    </section>
  )
}