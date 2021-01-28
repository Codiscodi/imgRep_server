const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    images: [{type: Types.ObjectId, ref: 'Image'}],
    user: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Folder', schema)