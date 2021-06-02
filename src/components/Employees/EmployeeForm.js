import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../Locations/LocationProvider"
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "../Employees/EmployeeProvider"

export const EmployeeForm = () => {
  const { getLocations, locations } = useContext(LocationContext)
  const { employees, getEmployees, addEmployee } = useContext(EmployeeContext)



  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
    customerId: 0
  });

  const history = useHistory();


  useEffect(() => {
    getEmployees().then(getLocations)
  }, [])

 
  const handleControlledInputChange = (event) => {

    const newEmployee = { ...employee }

    newEmployee[event.target.id] = event.target.value

    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault() 

    const locationId = parseInt(employee.locationId)
    const employeeId = parseInt(employee.id)
 

    if (locationId === 0) {
      window.alert("Please add a new employee")
    } else {


      const newEmployee = {
        name: employee.name,
        locationId: locationId,
      }
      addEmployee(newEmployee)
        .then(() => history.push("/employees"))
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeId">Assign to location: </label>
          <select name="location" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Assign a location</option>
            {locations.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
          </button>
    </form>
  )
}