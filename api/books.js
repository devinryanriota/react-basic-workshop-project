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
    "image_url": "https://jamesclear.com/wp-content/uploads/2019/09/AH-Preferred-Badge.png"
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
    "image_url": "https://www.oxfordstudent.com/wp-content/uploads/2019/11/2w.jpg"
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
    "image_url": "https://cdn.shoplightspeed.com/shops/633243/files/20279981/1600x2048x2/invisible-man-gordon-parks-and-ralph-ellison-in-ha.jpg"
  },
  {
    "isbn": "isbn-5",
    "title": "Weather",
    "author": "Jenny Offill",
    "published_date": "2020-02-11",
    "rating": {
      "score": 3.7,
      "out_of": 5
    },
    "image_url": "https://static01.nyt.com/images/2020/02/04/books/03bookoffill/03bookoffill-superJumbo.jpg?quality=90&auto=webp"
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
    "image_url": "https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s550x406.jpg"
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
    "image_url": "https://id.wikipedia.org/w/index.php?title=Berkas:Midnight_Sun_-_Stephanie_Meyer_novel_cover_artwork.jpg&filetimestamp=20200507055408&"
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
    "image_url": "https://i0.wp.com/www.paperbackparis.com/wp-content/uploads/2019/09/Best-Books-Staff-Picks-September-2019-Real-Life-Brandon-Taylor.png?w=600"
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