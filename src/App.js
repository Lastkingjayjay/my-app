import './App.css';
import Header from './Components/home/header/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePages from "./Components/pageContent/HomePages";
import Footer from './Components/home/work/Footer';


const App =() =>{
  return (<>
 
  <Router>
  <Header/>
  <Switch>
  <Route path='/' exact component={HomePages}/>
  </Switch>
  <Footer />
  </Router>
  </>

  );
}

export default App;
