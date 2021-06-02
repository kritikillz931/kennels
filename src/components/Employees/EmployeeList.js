import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employees"
import "./Employees.css"

export const EmployeeList = () => {

  const { employees, getEmployees } = useContext(EmployeeContext)
  const history = useHistory()
  
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])


  return (
    <>
    <button onClick={
        () => history.push("/employee/create")
      }>
            Add Employee
      </button>
    <section className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {
          return (
            <Employee EmployeeProp={employee}/>
          )
        })
      }
    </section>
    </>
  )
}

