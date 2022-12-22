import React, { Fragment, useState } from 'react'

const Counter2 = (props) => {
    const [count,setCount] = useState(0);
    const [name, setName] = useState('');
    return ( 
        <div>
            <Fragment>
                <input type='text' onChange={e => setName (e.target.value)}/>
                <div> {name} has clicked {count} times</div>
                <button onClick={()=> setCount(count +1)}>Increase</button>
            </Fragment>
        </div>
     );
}
 
export default Counter2;