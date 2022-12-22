import './App.css';
import Movie from './hoc/Movie';
import Counter1 from './hooks/Counter';
import { Fragment } from 'react';
import Counter2 from './hooks/CounterF';
import Users from './hooks/Users';
import React, { Component } from 'react'
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import Login from './context/Login';


class App extends Component {

  //state update method
  handleLoggedIn = (username) =>{
    console.log('Getting the user: '+username);
    const user = {name:'Dula'};
    this.setState({currentUser:user});
  }
  state = {currentUser :null};
  render(){
    return (
      <Fragment>
        <Movie id={1}/>
        <Counter1/>
        <Counter2/>
        <Users/>
        <UserContext.Provider value={{currentUser: this.state.currentUser, onLoggedIn: this.handleLoggedIn}}>
        <MoviePage/>
        <Login/>
        </UserContext.Provider>
        
      </Fragment>
      
    );
  }
  
}

export default App;
