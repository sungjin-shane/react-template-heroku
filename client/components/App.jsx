import React from 'react'
// import Button from 'react-bootstrap/lib/Button'
import {Button, Jumbotron} from 'reactstrap'
// import Button from 'react-bootstrap'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default App
