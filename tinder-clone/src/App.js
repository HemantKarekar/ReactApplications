import React from 'react';
import './styles/css/style.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </div>
    </Router>
  );
}
