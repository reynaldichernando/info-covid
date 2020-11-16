import './App.css';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main'
import Provinsi from './component/Provinsi';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/provinsi">
            <Provinsi />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
