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
    if(response.status === 200) {
      callback({
        isSuccess: true,
        data: response.data
      })
    } else {
      callback({
        isSuccess: false
      })
    }
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
    if(response.status === 201) {
      callback({
        isSuccess: true,
        message: response.data.message,
        data: response.data.data
      })
    } else {
      callback({
        isSuccess: false
      })
    }
  })
}

export default BookService