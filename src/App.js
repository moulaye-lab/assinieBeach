import React from 'react';
 import './App.css';
 import Home from "./pages/Home";
 import Rooms from "./pages/Rooms";
 import Errors from "./pages/Errors";
 import SingleRooms from "./pages/SingleRooms";
 import {Route,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Test from "./components/Test";

 function App() {
  return (
    <>
    <Test />
    <Navbar />
      <Switch>

    <Route exact path= "/" component ={Home} />
    <Route exact path="/rooms" component ={Rooms} />
    <Route exact path="/rooms/:slug" component= {SingleRooms} />
    <Route component={Errors} />
    </Switch>
    </>
  );
}

export default App;
