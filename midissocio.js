const { Telegraf } = require('telegraf')
const ratelimit = require("./ratelimit.json")

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command("midissocio", (ctx) => {
	ctx.reply("🔃 Processo di dissociamento iniziato.")
	setTimeout(() => {
		ctx.reply("⛔ Sto consultando il database di messaggi che potrebbero portarti al dissociamento...")
    	setTimeout(() => {
        	ctx.reply("⌚ La IA del bot sta indovinando il messaggio dal quale dissociarsi...")
        	setTimeout(() => {
            	ctx.reply("✅ Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
            	setTimeout(() => {
					if (Math.floor(Math.random() * 11) === 7) {
						ctx.reply("❌ Il dissociamento dal messaggio non è permesso.")
					} else {
						ctx.reply("⌚ Il dissociamento dal messaggio è permesso, dissociamento in corso...")
                		setTimeout(() => {
                    		ctx.reply("✅ 100% dissociato.")
                		}, 15000)
					}    
            	}, 1000)
        	}, 5000)
		}, 7000)
	}, 2000)
})

bot.command("dissociometro", (ctx) => {
	ctx.reply("✅ Oggi ti sei dissociato/a " + Math.floor(Math.random() * 1000001) + " volte! 😳")
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))