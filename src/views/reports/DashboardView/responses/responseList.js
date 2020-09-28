import React from 'react';
import Response from './response';

const ResponseList = (props) => {

    const renderresponse = () => {
        return props.response.map(({ name, message, data }, index) => (
          <Response key={index} name={name} message={message} data={data} index={index}/>
        ))
      }
      
    return ( 
        <>
        <div className="render-response">
        {renderresponse()}
      </div>
        </>
     );
}
 
export default ResponseList;