import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
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

<>
<div className="locations">
  {
    locations.map((location) => {
   return <div className="location"> <Link to={`/locations/details/${location.id}`}>
      <h3>{ location.name }</h3>
    </Link> 
<p>{location.employees.length} Employees</p>
<p>{location.animals.length} Animals</p>
</div>}
    )}
</div>
</>
    )
  }

