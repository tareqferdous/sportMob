import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import TeamDetails from './component/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="/team/:idTeam">
        <TeamDetails></TeamDetails>
        </Route>
        <Route path="*">
          <h1 className="text-center my-5 warning">404 - Page Not Found!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
