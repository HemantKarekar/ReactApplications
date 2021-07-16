import React from 'react';
import './styles/css/style.css';
import Home from './pages/Home';
import Profile, {ProfileID} from './pages/Profile';
import Blogs, {BlogsID} from './pages/Blogs';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/profile/:id" component={ProfileID} exact/>
        <Route path="/blogs" component={Blogs} exact/>
        <Route path="/blogs/:id" component={BlogsID} exact/>
      </Switch>
    </div>
    </Router>
  );
}
