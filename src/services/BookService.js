import axios from 'axios'

const BASE_URL = 'https://devin-react-basic-workshop-project.vercel.app/api'

const BOOKS_PATH = '/books'

let BookService = {}

BookService.get = (callback) => {
  const PATH = BASE_URL + BOOKS_PATH

  axios.get(PATH, {
    params: {}
  })
  .then((response) => {
    console.log('response', response)
    callback(response)
  })
}

BookService.create = (title, author, date, callback) => {
  const PATH = BASE_URL + BOOKS_PATH

  axios.post(PATH, {
    title: title,
    author: author,
    date: date
  })
  .then((response) => {
    console.log('response', response)
    callback(response)
  })
}

export default BookService