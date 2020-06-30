const router = require('express').Router()
const Word = require('../models/word')

router.get('/', async (request, response) => {
  const words = await Word.find({})
  console.log(words);
  response.json(words)
})

router.get('/:id', async (request, response) => {
  const word = await Word
    .findById(request.params.id)

  response.json(word)
})

router.put('/:id', async (request, response) => {
  const word = request.body

  const updatedWord = await Word.findByIdAndUpdate(request.params.id, word, {new: true});
  response.json(updatedWord.toJSON())
})

// router.post('/', async (request, response) => {
//   const blog = new Blog(request.body)
//
//   const decodedToken = jwt.verify(request.token, process.env.SECRET)
//
//   if (!request.token || !decodedToken.id) {
//     return response.status(401).json({error: 'token missing or invalid'})
//   }
//
//   const user = await User.findById(decodedToken.id)
//
//   if (!blog.url || !blog.title) {
//     return response.status(400).send({error: 'title or url missing '})
//   }
//
//   if (!blog.likes) {
//     blog.likes = 0
//   }
//
//   blog.user = user
//   const savedBlog = await blog.save()
//
//   user.blogs = user.blogs.concat(savedBlog._id)
//   await user.save()
//
//   response.status(201).json(savedBlog)
// })

module.exports = router