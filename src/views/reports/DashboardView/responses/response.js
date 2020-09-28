import React from 'react';

const Response = (props) => {
    return ( 
        <div key={props.index}>
            <h3>
               {props.name}: <span>{props.data}{props.message}</span>
            </h3>
          </div>
     );
}
 
export default Response;