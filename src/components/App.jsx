import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import Mapping from './Mapping';
import Loop from './Loop';
import Versus from './Versus';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
  body {
    background-color: #afdbcc;
  }
`}</style>
      <Header/>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/map' component={Mapping} />
          <Route exact path='/loop' component={Loop} />
          <Route exact path='/versus' component={Versus} />
          <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
