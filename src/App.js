import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer.js'
import Landing from './components/home/Landing.js'
import store from './store'

import Movie from './components/home/Movie'

import { HashRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>




    </div>
  );
}

export default App;
