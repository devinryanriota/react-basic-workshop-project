import React from 'react'
import './create.css'

class Create extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      year: ''
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    })
  }

  handleYearChange = (event) => {
    this.setState({
      year: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert('abc')
  }

  render = () => {
    const { title, author, year } = this.state

    return (
      <div>
        <table>
          <tr>
            <td>
              Title
            </td>
            <td>
              <input type = "text" value = { title } onChange = { this.handleTitleChange } required/>
            </td>
          </tr>

          <tr>
            <td>
              Author
            </td>
            <td>
              <input type = "text" value = { author } onChange = { this.handleAuthorChange } required/>
            </td>
          </tr>

          <tr>
            <td>
              Year
            </td>
            <td>
              <input type = "text" value = { year } onChange = { this.handleYearChange } required/>
            </td>
          </tr>
        </table>

        <input type = "submit" value = "submit" onClick = { this.handleSubmit }/>
      </div>
    )
  }
}

export default Create