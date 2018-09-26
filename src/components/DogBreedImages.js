import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      This page will show images of the { props.match.params.breed } breed.
      {/* This page will show images of a specific dog breed. */}

      <Link to="/">Go back to the index</Link>
      {/* <link /> */}
    </div>
  )
}