const TelegramBot = require('node-telegram-bot-api');

const token = '6111268816:AAGTvWFxr6N_zvkVt4HAJShXMs-Cv4Hc4zk';
const webAppUrl = 'https://genuine-vacherin-ab339b.netlify.app/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
   const chatId = msg.chat.id;
   const text = msg.text;

   if (text === '/start') {
      await bot.sendMessage(chatId, 'Ниже появится кнопк, заполни форму', {
         reply_markup: {
            keyboard: [
                [{ text: 'Заполнить форму', web_app: { url: webAppUrl } }]
            ]
         }
      })

      await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
         reply_markup: {
            inline_keyboard: [
               [{ text: 'Сделать заказ', web_app: { url: webAppUrl } }]
            ]
         }
      })
   }
});