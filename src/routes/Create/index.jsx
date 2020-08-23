import React from 'react'
import './create.css'

import BookService from '../../services/BookService'

class Create extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      date: ''
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

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { title, author, date } = this.state

    BookService.create(title, author, date, (res) => {
      if(res.isSuccess) {
        const alertMessage = res.message + "\ndata: " + JSON.stringify(res.data)
        alert(alertMessage)
        this.resetStates()
        this.props.history.push('/')
      } else {
        alert('error!')
      }
    })
  }

  resetStates = () => {
    this.setState({
      title: '',
      author: '',
      date: ''
    })
  }

  render = () => {
    const { title, author, date } = this.state

    return (
      <div>
        <h1>Create</h1>
        <table>
          <tbody>
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
                Date
              </td>
              <td>
                <input type = "text" value = { date } onChange = { this.handleDateChange } required/>
              </td>
            </tr>
          </tbody>
        </table>

        <input type = "submit" value = "submit" onClick = { this.handleSubmit }/>
      </div>
    )
  }
}

export default Create