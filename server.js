const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json())

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/folder', require('./routes/folderRoutes'))

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MONGO: Подключена!')
        app.listen(PORT, () => {
            console.log('SERVER: Подключен!')
            console.log(`PORT: ${PORT}!`)
        })

    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

start()