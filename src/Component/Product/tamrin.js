import React from 'react'
import ReactDOM from 'react-dom';

const Tamrin= ()=>{

    const title = React.createElement('h1', {}, 'My First React Code');
    ReactDOM.render(
      title,
      document.getElementById('global')

    );
    return(
    <div>
   
    </div>
    )

}
export default Tamrin;