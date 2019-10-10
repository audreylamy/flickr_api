import React            from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage         from "./Homepage"
import NotFound          from "./notFound"
import PhotosProvider   from  "./photosContext"

const App = () => {
  return (
    <Router>
      <Switch>
        <PhotosProvider>
          <Route exact path="/" component={Homepage} />
          <Route path="/:tag"component={Homepage} />
          <Route path="*"component={NotFound} />
        </PhotosProvider>
      </Switch>
    </Router>
  );
}

export default App;
