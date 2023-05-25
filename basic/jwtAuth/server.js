require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 6000
app.use(express.json())

const posts = [
  {
    username: 'arman',
    title: 'Post 1'
  },
  {
    username: 'chetan',
    title: 'Post 2'
  }
]

app.get('/posts',authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
  //res.json(posts)
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


app.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken })
})

app.listen(port,function(err){
   console.log(`server running on port ${port}`)
})