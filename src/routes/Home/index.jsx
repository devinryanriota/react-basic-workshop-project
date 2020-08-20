import React from 'react'
import './home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }

  componentDidMount = () => {

  }

  render = () => {
    return (
      <div>
        Homee!
      </div>
    )
  }
}

export default Home
