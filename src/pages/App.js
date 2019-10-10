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
          <Route path="/dog"component={ListImg} />
          <Route path="/cat" component={ListImg} />
          <Route path="/bird" component={ListImg} />
        </PhotosProvider>
      </div>
    </Router>
  );
}

export default App;
