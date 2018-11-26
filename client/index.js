import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'
// import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'

import App from './components/App'

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
