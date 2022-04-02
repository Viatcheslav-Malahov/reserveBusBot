import { Telegraf } from 'telegraf'

const token = '5148658302:AAEpes69L9s1pdgEEUgYpB4zqCTYsJH4aLQ';

const bot = new Telegraf(token);


bot.on('text', (ctx) => {
    if(ctx.message.text == '1') {
        ctx.telegram.sendMessage(ctx.message.chat.id, `you write number 1`)
    }
    else {
        ctx.telegram.sendMessage(ctx.message.chat.id, `hello mr.${ctx.message.chat.first_name}`)
    }
})

bot.launch()