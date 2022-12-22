import './App.css';
import Movie from './hoc/Movie';
import Counter1 from './hooks/Counter';
import { Fragment } from 'react';
import Counter2 from './hooks/CounterF';
import Users from './hooks/Users';
import React, { Component } from 'react'
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';


class App extends Component {
  state = {currentUser : {name:'Dul'}};
  render(){
    return (
      <Fragment>
        <Movie id={1}/>
        <Counter1/>
        <Counter2/>
        <Users/>
        <UserContext.Provider value={this.state.currentUser}>
        <MoviePage/>
        </UserContext.Provider>
        
      </Fragment>
      
    );
  }
  
}

export default App;
