import NavBar from './Components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Filiar from './Components/Pages/Filiar-se';
import Home from './Components/Pages/Home';
import Sobre from './Components/Sobre';


function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Switch>
      <div className>
      <Route exact path='/' component={Home} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/filiar-se' component={Filiar} />
      
      </div>
      </Switch>
      </Router>   
    </div>
  );
}

export default App;


