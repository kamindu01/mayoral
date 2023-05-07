import './App.css';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
