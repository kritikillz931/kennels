import React from "react"
import "./Customers.css"

export const Customer = ({CustomerProp}) => (
    <section className="customer">
        <h3 className="customer__name">{CustomerProp.name}</h3>
        <div className="customer__address">{CustomerProp.address}</div>
    </section>
)