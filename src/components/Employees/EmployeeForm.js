import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../Locations/LocationProvider"
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "../Employees/EmployeeProvider"

export const EmployeeForm = () => {
  const { getLocations, locations } = useContext(LocationContext)
  const { employees, getEmployees, addEmployee } = useContext(EmployeeContext)


  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
    customerId: 0
  });

  const history = useHistory();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getEmployees().then(getLocations)
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value
    // update state
    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId)
    const employeeId = parseInt(employee.id)
 

    if (locationId === 0) {
      window.alert("Please add a new employee")
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the animal list

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