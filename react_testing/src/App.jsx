// import React from '@vitejs/plugin-react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import  About from './About'
import Speech from './speech'

function App() {
    const temp = "outside";
     return(
     <Router>
       <Routes>
          <Route path="/" element={<Home />}></Route >
          <Route path="/about" element={<About text={temp} />}></Route> 
          <Route path="/speech"element={<Speech />}> </Route>
       </Routes>
     </Router>
      );
}

export default App
