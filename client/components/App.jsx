import React from 'react'
// import Button from 'react-bootstrap/lib/Button'
import {Button, Jumbotron} from 'reactstrap'
import NavMenu from './NavMenu'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <NavMenu/>        
      </div>
    )
  }
}

export default App
