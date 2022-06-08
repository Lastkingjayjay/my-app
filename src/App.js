import './App.css';
import Header from './Components/home/header/Header'
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePages from "./Components/home/home/Homes";


function App() {
  return (<>
 
  <Router>
  <Header/>
  <Switch>
  <Route path='/' exact component={HomePages}/>
  </Switch>
  </Router>
  </>

  );
}

export default App;
