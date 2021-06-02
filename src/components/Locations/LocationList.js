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
    locations.map(location => <Link to={`/locations/details/${location.id}`}>
      { location.name }
    </Link>)
  }
</div>
</>
    )
}

