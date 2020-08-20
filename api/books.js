const books = [
  {
    "isbn": "isbn-1",
    "title": "Effective Engineer",
    "author": "Edmond Lau",
    "publishedDate": "2015-03-19",
    "rating": "4.3/5"
  },
  {
    "isbn": "isbn-2",
    "title": "Atomic Habits",
    "author": "James Clear",
    "publishedDate": "2018-10-16",
    "rating": "4.5/5"
  },
  {
    "isbn": "isbn-3",
    "title": "Normal People",
    "author": "Sally Rooney",
    "publishedDate": "2018-08-28",
    "rating": "3.9/5"
  },
  {
    "isbn": "isbn-4",
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "publishedDate": "1952-04-14",
    "rating": "4.0/5"
  },
  {
    "isbn": "isbn-5",
    "title": "All the Light We Cannot See",
    "author": "Anthony Doerr",
    "publishedDate": "2014-05-06",
    "rating": "4.4/5"
  },
  {
    "isbn": "isbn-6",
    "title": "A Clockwork Orange",
    "author": "Anthony Burgess",
    "publishedDate": "1962-01-01",
    "rating": "4.6/5"
  }
]

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another option
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  console.log('request', req)
  if(req.method === 'GET') {
    res.status(200).json({data: books})
  } else if(req.method === 'POST') {
    res.status(201).json({message: 'data successfully created!'})
  } else {
    res.status(400).json({message: 'wrong http method!'})
  }
}

module.exports = allowCors(handler)