import React, { PropTypes } from 'react';
import Mermaid from './Mermaid';


const App = ({description}) => (
  <div>
    <div className='atlantis'> <span> Erte's Mermaid </span> </div>
      <Mermaid description={description}/>
  </div>
);

App.propTypes = {
    description: PropTypes.string
};

export default App;