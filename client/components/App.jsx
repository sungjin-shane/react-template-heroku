import React from 'react'
import {Route} from 'react-router-dom'
import Navmenu from './Navmenu'
import Intro from './Intro'
import Main from './Main'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  render () {
    return (
      <div>
        {/* Root page loading */}
        <Route path='/' component={Navmenu}/>
        <Route exact path='/' component={Intro}/>

        {/* Contents pages routing */}
        <Route path='/Main' component={Main}/>
      </div>
    )
  }
}

export default App
