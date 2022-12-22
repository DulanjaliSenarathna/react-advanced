import React, { Fragment, useEffect, useState } from 'react'

const Counter2 = (props) => {
    const [count,setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        document.title = `${name} has clicked ${count} times!`;

        return () =>{
            console.log('Cleanup');//componentwiiunmout stage. cleanup codes 
        };
    },[count]);// [count] means, useEffect function call , only when the count is change
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