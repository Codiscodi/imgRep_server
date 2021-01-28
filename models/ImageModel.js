const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    url: {type: String, required: true, unique: true},
    folder: {type: Types.ObjectId, ref: 'Folder'}
})

module.exports = model('Image', schema)