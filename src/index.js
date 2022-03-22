import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
      BrowserRouter as Router,
      Routes,
      Route
} from 'react-router-dom';
import Home from './screens/Home';
import Certifications from './screens/Certifications';

render(
        // <Router>
        //         <Routes>
        //                 <Route path="/" elemenet={<Home />} exact />
        //                 <Route path="/certification" elemenet={<Certifications />} />
        //         </Routes>
        // </Router>
        <App />
        ,
        document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
