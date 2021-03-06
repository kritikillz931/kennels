import React from "react"
import { Route } from "react-router-dom"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./Employees/EmployeeDetail"
import { LocationDetail } from "./Locations/LocationDetail"
import { Employees } from "./Employees/Employees"
import { AnimalSearch } from "./animal/AnimalSearch"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationProvider>
                <Route exact path="/">
                <div className="headerText">
              <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
              </div>
                </Route>
            </LocationProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <EmployeeProvider>
                    <Route exact path="/locations/details/:locationId(\d+)">
                        <LocationDetail />
                    </Route>
                </EmployeeProvider>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                    <Route exact path="/employees/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/details/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route path="/animals/details/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                            <Route exact path="/animals">
                                <AnimalSearch />
                            </Route>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>

                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}