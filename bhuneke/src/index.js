import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './main.scss';

ReactDOM.render(
    <App className={styles.main}/>,
    document.getElementById('root')
);