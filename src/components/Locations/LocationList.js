import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Locations"
import "./Locations.css"

export const LocationList = () => {
  
  const { locations, getLocations } = useContext(LocationContext)

 
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