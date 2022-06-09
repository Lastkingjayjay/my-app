import './App.css';
import Header from './Components/home/header/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePages from "./Components/pageContent/HomePages";


const App =() =>{
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
