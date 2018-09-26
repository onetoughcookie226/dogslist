
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import DogBreedImages from './DogBreedImages'

export default class DogsList extends PureComponent {
  renderDogBreed(breed) {
    // return <li key={breed}>{breed}</li>
   return  <li key={breed}><Link to={ `/dog-breeds/${breed}` }>{breed}</Link></li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && 'Loading...' }

        {
          dogBreeds &&
          <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}


//---------------------One Big componenet ------------------------
// import React, {PureComponent} from 'react'
// import request from 'superagent';

// export default class DogsList extends PureComponent {
//     //creates an instance of your DogsList class.
//     state = { dogBreeds: null }


//     //run componentDidMount() and start a request to the Dogs API.
//     componentDidMount() {
//         request
//           .get('https://dog.ceo/api/breeds/list/all')
//         //   .then(response => console.log(Object.keys(response.body.message)))
//           .then(response => this.updateBreeds(Object.keys(response.body.message)))

//           .catch(console.error)
//       }

//     //API response will come back and updateBreeds invokes the setState method.
//       updateBreeds(breeds) {
//         this.setState({
//           dogBreeds: breeds
//         })
//       }

// //run render() again but now with a new state; the result of the render will contain the dog breeds <li> items.
//   render() {
//     return (
//       <div className="dogs-list">
//         <h1>Dogs List</h1>
//         { this.state.dogBreeds === null && 'Loading...' }
//         <ul>
//          { this.state.dogBreeds !== null && this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>)  }
//         </ul>

//       </div>
//     )
//   }
// }

