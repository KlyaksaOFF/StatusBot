import 'dotenv/config'
import { Telegraf } from 'telegraf';
import{ message } from 'telegraf/filters';


const bot = new Telegraf(process.env.BOT_TOKEN)

const requestUrl = async (url) => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            return response.status
        }
    }
    catch (error) {
            return 'Error'
        }
}

// const result = await requestUrl('')



bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))