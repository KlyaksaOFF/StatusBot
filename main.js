const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')


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

const result = await requestUrl('')
console.log(result)
