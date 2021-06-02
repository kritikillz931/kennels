// import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "./LocationProvider"
// import { EmployeeContext } from "../Employees/EmployeeProvider"
// import "./Locations.css"
// import { useParams } from "react-router-dom"

// export const LocationDetail = () => {
//     const { locations } = useContext(LocationContext)
//     const { employees } = useContext(EmployeeContext)
//     const [ location, setLocation ] = useState({ location: {}, customer: {}, animal: {} })
//     const [employee, setEmployee ] = useState([])

//     const { locationId } = useParams();


//     useEffect(() => {
//         const thisLocation = locations.find(l => l.id === parseInt(locationId)) || { location: {}, employee: {}, animal: {} }
//         const locationEmployees = employees.filter(e => e.locationId === parseInt(locationId))
//         setLocation(thisLocation)
//         setEmployee(locationEmployees)
//     }, [locationId])

//     return (
//     <section className="location">
//         <h3 className="location__name">{ location.name }</h3>
//         <div className="location__address">{ location.address }</div>
//         {employee.map((emp) =>{
//             return <p>{emp.name}</p>
//         })}
//     </section>
//     )
// }

import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [location, setLocation] = useState({ employees: [], animals: [] })


    const { locationId } = useParams();


    useEffect(() => {
        const thisLocation = locations.find(l => l.id === parseInt(locationId)) || { employee: {}, animal: {} }

        setLocation(thisLocation)
    }, [locationId])
    let workers = location.employees
    let residents = location.animals
    return (
        <section className="animal">
            <h3 className="animal__name">{location.name}</h3>
            <div className="animal__breed">{location.address}</div>
            <div>
                <h4>Employees</h4>
                {workers.map(worker => <p>{worker.name}</p>)}
            </div>
            <div>
                <h4>Current Residents</h4>
            {residents.map(resident => <p>{resident.name}</p>)}
            </div>
        </section>
    )
}

// {location.employees.map((emp) => {
//     return <p>{emp}</p>

// })}
