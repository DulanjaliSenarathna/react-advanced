import React, { Fragment, useState } from 'react'

const Counter2 = (props) => {
    const [count,setCount] = useState(0);
    return ( 
        <div>
            <Fragment>
                <div>Count: {count}</div>
                <button onClick={()=> setCount(count +1)}>Increase</button>
            </Fragment>
        </div>
     );
}
 
export default Counter2;