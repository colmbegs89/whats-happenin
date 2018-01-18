import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// import Generic from './components/Generic.js'
import registerServiceWorker from './registerServiceWorker'

//to add an additional route simply copy line 21 for a standard page
//or line 22 if you wish to use the generic and uncomment line 8//TODO still in progress

ReactDOM.render(<App />, document.getElementById('root')
)
registerServiceWorker()