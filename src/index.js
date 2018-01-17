import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import About from './components/About.js'
import NotFound from './components/NotFound.js'
import Accommodation from './components/Accommodation.js'
// import Generic from './components/Generic.js'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//to add an additional route simply copy line 21 for a standard page
//or line 22 if you wish to use the generic and uncomment line 8//TODO still in progress

ReactDOM.render(
  <Router>
      <div>
        <Switch>
            <Route  path="/" exact component={App} />
            <Route path="/about" exact component={About} />
            <Route path="/accommodation" exact component={Accommodation} />
            {/* <Route path="/about2" exact component={() => <Generic body={html} title='About' />} /> */}
            <Route component={NotFound} />
          </ Switch>
      </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()