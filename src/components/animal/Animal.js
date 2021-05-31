import React from "react"
import "./Animal.css"

export const Animal = ({animalProp}) => (
    <section className="animal">
        <h3 className="animal__name">{animalProp.name}</h3>
        <div className="animal__breed">{animalProp.breed}</div>
    </section>
)