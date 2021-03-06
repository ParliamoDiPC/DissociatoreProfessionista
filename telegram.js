const { Telegraf } = require("telegraf")
const config = require("") // ho un file json unico con tutti i token dei bot

const bot = new Telegraf(config.dissociatore.telegram_token) // { "dissociatore": { "discord_token": "foo", telegram_token: "bar" } }
console.log("Il bot Telegram (@midissocioh_bot) รจ online!")

bot.command("midissocio", (ctx) => {
        ctx.reply("๐ Processo di dissociamento iniziato.")
        setTimeout(() => {
                ctx.reply("โ Sto consultando il database di messaggi che potrebbero portarti al dissociamento...")
        setTimeout(() => {
                ctx.reply("โ La IA del bot sta indovinando il messaggio dal quale dissociarsi...")
                setTimeout(() => {
                ctx.reply("โ Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
                setTimeout(() => {
                                        if (Math.floor(Math.random() * 28) === 7) {
                                                ctx.reply("โ Il dissociamento dal messaggio non รจ permesso.")
                                        } else {
                                                ctx.reply("โ Il dissociamento dal messaggio รจ permesso, dissociamento in corso...")
                                setTimeout(() => {
                                ctx.reply("โ 100% dissociato.")
                                }, 15000)
                                        }    
                }, 1000)
                }, 5000)
                }, 7000)
        }, 2000)
})

bot.command("miassocio", (ctx) => {
        ctx.reply("๐ Processo di associamento iniziato.")
        setTimeout(() => {
                ctx.reply("โ Sto consultando il database di messaggi che potrebbero portarti all'associamento...")
        setTimeout(() => {
                ctx.reply("โ La IA del bot sta indovinando il messaggio al quale associarsi...")
                setTimeout(() => {
                ctx.reply("โ Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
                setTimeout(() => {
                                        ctx.reply("โ Associamento in corso...")
                                setTimeout(() => {
                                ctx.reply("โ 100% associato.")
                                }, 15000)  
                }, 1000)
                }, 5000)
                }, 7000)
        }, 2000)
})

bot.command("dissociometro", (ctx) => {
        ctx.reply("โ Oggi ti sei dissociato/a " + Math.floor(Math.random() * 1000001) + " volte! ๐ณ")
})

bot.command("testuconlaccentosullau", (ctx) => {
        const cosimarsi = ["owo", "uwu", ";)", ":)", "sus", "forever", "<3", "u\\\\w\\\\u", "๐ณ"]
        ctx.reply("testรน " + cosimarsi[Math.floor(Math.random() * cosimarsi.length)])
})

bot.launch()

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))

// rip indent
