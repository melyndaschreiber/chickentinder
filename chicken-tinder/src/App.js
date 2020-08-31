import React from 'react';
import './App.css';
import Header from './Header';
// import ButtonAppBar from './AppHeader';
import config from './config';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TinderCards from './TinderCards';
// import TinderCard from react-tinder-card

var mykey = config.MY_KEY;

function App() {
  return (
    <div className="App">
      {/*<ButtonAppBar />*/}
      {/* Header */}
      <Header/>
      
      <Router>
        
        <Switch>
          <Route path='/chat'>
            <h1> This is my chat.</h1>
          </Route>
          <Route>
            <TinderCards />
          </Route>

        </Switch>

      </Router>

      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key={{mykey}}&libraries=places"></script>
      {/* Tinder Cards */} 
      {/* Buttons Below the cards*/}
      
      {/* Chat Screen */}
      {/* Individual Chat Screen */}

    </div>
  );
}

export default App;
