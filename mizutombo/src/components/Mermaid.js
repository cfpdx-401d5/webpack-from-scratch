import React, { PropTypes } from 'react';
import styles from './Mermaid.scss';

const Mermaid = ({description}) => (
  <div> 

    <div className={styles.mermaid}>
      This is Erte's art-deco painting of a <span> {description} </span>
    </div>
    <br />
    <div>
      <img src='https://s-media-cache-ak0.pinimg.com/564x/67/71/7a/67717a89d40892c2c0681ff70af8c206.jpg'/>  
    </div>

  </div>
);

Mermaid.propTypes = {
    description: PropTypes.string
};

export default Mermaid;