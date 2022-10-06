import React from 'react'
import Home from './screens/Home';
import Certifications from './screens/Certifications';
import {Works} from './screens/Works';
import {Others} from './screens/Others';
import {
        BrowserRouter as Router,
        Routes,
        Route
} from 'react-router-dom'


function App () {
        return (
                <Router>
                
                        <Routes>
                                <Route path="/" element={<Home />} exact />
                                <Route path="/certify" element={<Certifications />} />
                                <Route path="/works" element={<Works />} />
                                <Route path="/Others" element={<Others />} />
                        </Routes>

                </Router>
        )
}


export default App;
