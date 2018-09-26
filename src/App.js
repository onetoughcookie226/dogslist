import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsList from './components/DogsList'
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages'


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <main>
          <DogsList />
          {/* <DogsListContainer /> */}
          <Route exact path="/" component={DogsListContainer} />
         
          <Route path="/dog-breeds/:breed" component={DogBreedImages} />
          {/* <li key={breed}>
          </li> */}


        </main>
      </div>
    );
  }
}

export default App;
