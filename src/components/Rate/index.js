// Import the necessary libraries
import React, { useState } from 'react';

// Rate Component
const Rate = ({ callback }) => {
    // Set value state.
    const [value, setValue] = useState(5);

    return (
        <div>
            <input type='range' min='1' max='10' value={value} onChange={(e => setValue(e.currentTarget.value))}/>

            {value}
            <p><button onClick={() => callback(value)}>Rate</button></p>
        </div>
    )
}


// Export the rate ccomponent
export default Rate;