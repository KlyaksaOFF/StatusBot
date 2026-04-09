import 'dotenv/config'
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

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

bot.command('status', async (ctx) => {
    const args = ctx.payload;
    if (!args) {
        return ctx.reply('Specify the url after the command!');
    }
    try {

        const resultCheckUrl = await requestUrl(args)
        await ctx.reply(resultCheckUrl);
    } catch(error) {
        await ctx.reply('Error')
    }

})




bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))