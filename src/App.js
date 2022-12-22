import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter1 from './hooks/Counter';
import { Fragment } from 'react';
import Counter2 from './hooks/CounterF';
import Users from './hooks/Users';

function App() {
  return (
    <Fragment>
      <Movie id={1}/>
      <Counter1/>
      <Counter2/>
      <Users/>
    </Fragment>
    
  );
}

export default App;
