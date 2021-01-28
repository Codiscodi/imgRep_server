const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

class UserController {
    async register(req, res) {
        try {
            const {login, password} = req.body
            const candidate = await User.findOne({login})
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким Логином уже существует'})
            }
            const hashPassword = await bcrypt.hashSync(password, 6)
            const user = new User({
                login, password: hashPassword
            })
            await user.save()
            res.status(201).json({message: 'Пользователь создан'})
        } catch (e) {
            console.log('Что-то пошло не так в UserController/Register' + e)
        }
    }

    async login(req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({login})
            if (!user) {
                return res.status(400).json({message: 'Такого пользователя не существует!'})
            }
            const validPassword = await bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'Неверный пароль'})
            }
            const token = await jwt.sign({id: user._id, login: login}, config.get('jwtSecret'))
            res.status(200).json({message: 'Вы вошли в систему', token, login, id: user.id})

        } catch (e) {
            console.log('Что-то пошло не так в UserController/Login' + e)
        }
    }
}


module.exports = UserController