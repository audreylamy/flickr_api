import React            from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage         from "./Homepage"
import PhotosProvider   from  "./photosContext"

const App = () => {
  return (
    <Router>
      <Switch>
        <PhotosProvider>
          <Route exact path="/" component={Homepage} />
          <Route path="/:tag"component={Homepage} />
        </PhotosProvider>
      </Switch>
    </Router>
  );
}

export default App;
