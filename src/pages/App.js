import React            from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage         from "./Homepage"
import Dog              from "../components/dog"
import Cat              from "../components/cat"
import Bird             from "../components/bird"

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/dog"component={Homepage} />
        <Route path="/cat" component={Homepage} />
        <Route path="/bird" component={Homepage} />
      </div>
    </Router>
  );
}

export default App;
