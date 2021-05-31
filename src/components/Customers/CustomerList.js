import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customers"
import "./Customers.css"

export const CustomerList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()
  }, [])


  return (
    <section className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return (
            <Customer CustomerProp={customer} />
          )
        })
      }
    </section>
  )
}