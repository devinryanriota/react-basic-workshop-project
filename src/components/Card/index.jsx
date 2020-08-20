import React from 'react'
import './card.css'

class Card extends React.Component {

  render = () => {
    const { imgUrl, title, author, publishedYear } = this.props

    return (
      <div className = 'card'>
        <img src = { imgUrl } alt = { title } style = {{ width: '200px', height: '200px' }}/>
        <div className = 'text-container'>
          <p style = {{ fontSize: '20', fontWeight: 'bold' }}>{ title }</p>
          <p>Author: { author }</p>
          <p>Published: { publishedYear }</p>
        </div>
      </div>
    )
  }
}

export default Card