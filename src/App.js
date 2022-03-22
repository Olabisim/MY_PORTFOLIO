import React from 'react'
import Home from './screens/Home';
import Certifications from './screens/Certifications';
import {
        BrowserRouter as Router,
        Routes,
        Route
} from 'react-router-dom'
// import './App.css'


function App () {
        return (
                <Router>
                
                        <Routes>
                                <Route path="/" element={<Home />} exact />
                                <Route path="/certify" element={<Certifications />} />
                        </Routes>

                </Router>
        )
}


export default App;
