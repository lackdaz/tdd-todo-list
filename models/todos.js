var mongoose = require('mongoose')

var todosSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean,
})

// update the schema
var Todos = mongoose.model('todos',todosSchema)

module.exports = Todos
