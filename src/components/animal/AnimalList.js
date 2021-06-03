import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)
     history = useHistory()
    // history = useHistory()
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
        console.log(animals)
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Add Animal
            </button>

            <div className="animals">
               { animals &&
                    animals.map(animal => <Link to={`/animals/details/${animal.id}`}>
                        
                     { animal.name }
                        </Link>
                    )
                }
            </div>
                
        </>
    )
}
