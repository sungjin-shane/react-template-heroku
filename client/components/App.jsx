import React from 'react'
// import Button from 'react-bootstrap/lib/Button'
import {Button} from 'reactstrap'
//import Button from 'react-bootstrap'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        {/* <Button bsStyle='primary' bsSize='large'>{'message'}</Button> <==react-bootstrap example */}
        <Button color="danger">Danger!</Button>
        start
      </div>
    )
  }
}

export default App
