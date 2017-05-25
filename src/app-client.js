import React from 'react';
import ReactdOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => ReactDOM.render(<AppRoutes />, document.getElementById('main'));