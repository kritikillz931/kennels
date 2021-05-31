import React from "react"
import "./Employees.css"

export const Employee = ({EmployeeProp}) => (
    <section className="employee">
        <h3 className="employee__name">{EmployeeProp.name}</h3>
        <div className="employee__location">{EmployeeProp.location.name}</div>
    </section>
)