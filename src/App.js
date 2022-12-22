import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter1 from './hooks/Counter';
import { Fragment } from 'react';
import Counter2 from './hooks/CounterF';

function App() {
  return (
    <Fragment>
      <Movie id={1}/>
      <Counter1/>
      <Counter2/>
    </Fragment>
    
  );
}

export default App;
