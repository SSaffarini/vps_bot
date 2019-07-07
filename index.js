const TelegramBot = require("node-telegram-bot-api")
const os = require('os')
const bot = new TelegramBot("870904115:AAFg1PajuwWIj4P3Fbh6wCjodEF4OaqnUGQ",{polling: true})

bot.on('message', msg => {

bot.sendMessage(msg.chat.id,'hello from,bot says hi to '+ msg.from.first_name + 'Saffarini')

})
