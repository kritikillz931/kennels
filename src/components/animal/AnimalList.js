import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { Animal } from "./Animal"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, [])


  return (
    <section className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return (
            <Animal animalProp={animal} key={animal.id}/>
          )
        })
      }
    </section>
  )
}