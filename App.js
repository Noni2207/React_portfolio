import React from 'react';
//import Styles
import style from "./style/app.css";
//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//router
import { Switch, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';

// nav components
import Nav from './components/Nav';


function App() {
  
  return (
    <div className="App">
     <ScrollTop />
      <Nav />
    
  <Switch >
    <Route path="/" exact>
     <AboutUs /> 
    </Route>
    <Route path="/work" exact>
     <OurWork /> 
    </Route>
    <Route path="/work/:id">
      <MovieDetail />
    </Route>
     <Route path="/contact">
    <ContactUs /> 
    </Route>
  </Switch>
   
    </div>
  );
};

export default App;
