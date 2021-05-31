import React from "react"
import "./Locations.css"

export const Location = ({LocationProp}) => (
    <section className="location">
        <h3 className="location__name">{LocationProp.name}</h3>
        <div className="location__address">{LocationProp.address}</div>
    </section>
)