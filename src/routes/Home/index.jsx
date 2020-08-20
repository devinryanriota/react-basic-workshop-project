import React from 'react'
import './home.css'

import Card from '../../components/Card'

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
