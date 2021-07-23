const express = require('express')
const mongoose = require('mongoose')
const bodYParser = require('body-parser')
const users = require('./routes/users')
const profile = require('./routes/profile')
const posts = require('./routes/posts')
const auth = require('./routes/auth')
const app = express()

mongoose
  .connect('mongodb://localhost:27017/mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.use(express.json({ extended: false }))

app.use('/users', users)
app.use('/profile', profile)
app.use('/posts', posts)
app.use('/auth', auth)

app.listen(5000, () => {
  console.log('server started on port 5000')
})
