const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({
  english: {
    type: String,
    required: true
  },
  hebrew: {
    type: String,
    required: true
  },
  associations: {
    type: [String],
    default: []
  },
  level: {
    type: Number,
    default: 0
  }

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // comments: {
  //   type: [String],
  //   default: []
  // }
})

wordSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Word', wordSchema)