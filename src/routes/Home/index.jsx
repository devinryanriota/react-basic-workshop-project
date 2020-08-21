import React from 'react'
import './home.css'

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
        publishedDate: b.publishedDate,
        rating: b.rating
      }
    })

    this.setState({
      books: toState
    })
  }

  renderCards = () => {
    const { books } = this.state
    
  }

  render = () => {
    const { books } = this.state

    return (
      <div className = 'grid-container'>
        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />

        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />

        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />

        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />

        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />

        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />

        <Card 
          imgUrl = 'https://picsum.photos/100'
          title = 'abcdef'
          author = 'hehe'
          publishedYear = '2019'
        />
      </div>
    )
  }
}

export default Home
