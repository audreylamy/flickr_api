import React            from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage         from "./Homepage"
import ListImg          from "../components/listImg"
import PhotosProvider   from  "./photosContext"

const App = () => {
  return (
    <Router>
      <div>
        <PhotosProvider>
          <Route exact path="/" component={Homepage} />
          <Route path="/dog"component={Homepage} />
          <Route path="/cat" component={Homepage} />
          <Route path="/bird" component={Homepage} />
        </PhotosProvider>
      </div>
    </Router>
  );
}

export default App;
