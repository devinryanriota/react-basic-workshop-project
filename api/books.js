const books = [
  {
    "isbn": "isbn-1",
    "title": "Effective Engineer",
    "author": "Edmond Lau",
    "published_date": "2015-03-19",
    "rating": {
      "score": 4.3,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-2",
    "title": "Atomic Habits",
    "author": "James Clear",
    "published_date": "2018-10-16",
    "rating": {
      "score": 4.5,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-3",
    "title": "Normal People",
    "author": "Sally Rooney",
    "published_date": "2018-08-28",
    "rating": {
      "score": 3.9,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-4",
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "published_date": "1952-04-14",
    "rating": {
      "score": 4,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-5",
    "title": "Cleanness",
    "author": "Garth Greenwell",
    "published_date": "2020-01-14",
    "rating": {
      "score": 4,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-6",
    "title": "A Clockwork Orange",
    "author": "Anthony Burgess",
    "published_date": "1962-01-01",
    "rating": {
      "score": 4.6,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-7",
    "title": "Midnight Sun",
    "author": "Stephenie Meyer",
    "published_date": "2020-08-04",
    "rating": {
      "score": 4,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
  },
  {
    "isbn": "isbn-8",
    "title": "Real Life",
    "author": "Brandon Taylor",
    "published_date": "2020-02-18",
    "rating": {
      "score": 4,
      "out_of": 5
    },
    "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGbih_vVKOHE8su0nNJtVsGxXnprtO1qqtQyjgN_Y2n0nCJWaV"
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
  if(req.method === 'GET') {
    res.status(200).json({data: books})
  } else if(req.method === 'POST') {
    const { body } = req
    console.log('request body', body)
    res.status(201).json({message: 'data successfully created!', data: req.body})
  } else {
    res.status(400).json({message: 'wrong http method!'})
  }
}

module.exports = allowCors(handler)