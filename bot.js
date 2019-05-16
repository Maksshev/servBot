const express = require('express')
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())


const token = '884928727:AAGIow5SKhK1Nt6PThuwwQuHH32zpUuNWLA'
const bot = new TelegramBot(token, {polling: true})


const ids = []

bot.onText(/\/r/, (msg, match) => {

    const chatId = msg.chat.id;

    ids.push(chatId)
});


app.get('/', (req, res) => {
    res.send('')
})

app.post('/', (req, res) => {

    ids.forEach(id => {
        bot.sendMessage(id, JSON.stringify(req.body))
    })

    res.end()
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Port 3000')
})


