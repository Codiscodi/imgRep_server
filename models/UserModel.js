const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    folders: [{type: Types.ObjectId, ref: 'Folder'}]
})

module.exports = model('User', schema)