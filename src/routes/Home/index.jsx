import React from 'react'
import './home.css'
// import Link from 'react-router-dom'

import Card from '../../components/Card'

import BookService from '../../services/BookService'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    //API call
    BookService.get((res) => {
      this.processGetBooksResponse(res.data)
    })
  }

  processGetBooksResponse = (data) => {
    const books = data.data
    let toState = books.map((b) => {
      return {
        isbn: b.isbn,
        title: b.title,
        author: b.author,
        publishedDate: b.published_date,
        rating: b.rating,
        imageUrl: b.image_url
      }
    })

    this.setState({
      books: toState
    }, () => {
      console.log('state', this.state)
    })
  }

  renderCards = () => {
    const { books } = this.state
    let display = []
    books.forEach((b) => {
      display.push(
        // <Link to={'/books/' + isbn} className="item" key = { id }>
        <Card
          key = { b.title }
          imgUrl = 'https://picsum.photos/100'
          title = { b.title }
          author = { b.author }
          publishedYear = { b.publishedDate }
        />
        //</Link>
      )  
    })
    return display
  }

  render = () => {
    return (
      <div className = 'grid-container'>
        { this.renderCards() }
      </div>
    )
  }
}

export default Home
