const Folder = require('../models/FolderModel')

class FolderController {
    async create(req, res) {
        try {
            const {name} = req.body
            const user = req.user

            const folder = new Folder({
                name, user: user.id
            })

            await folder.save()

            res.status(201).json({message: `Папка ${name}, создана`})
        } catch (e) {
            console.log('Что-то пошло не так в FolderController/Create' + e)
        }
    }

    async get(req, res) {
        try {
            const user = req.user.id
            const folders = await Folder.find({user})

            res.status(200).json({folders})
        } catch (e) {
            console.log('Что-то пошло не так в FolderController/Get' + e)
        }
    }
}


module.exports = FolderController