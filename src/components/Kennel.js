import React from "react"
import "./Kennel.css"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { LocationProvider } from "./Locations/LocationProvider"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationList } from "./Locations/LocationList"
import { CustomerList } from "./Customers/CustomerList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
        <AnimalProvider>
        <AnimalList />
        </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>
    
    <h2>Locations</h2>
    <article className="locations">
        <LocationProvider>
        <LocationList />
        </LocationProvider>
        </article>
    
        <h2>Customers</h2>
    <article className="customers">
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
        </article>
</>
)