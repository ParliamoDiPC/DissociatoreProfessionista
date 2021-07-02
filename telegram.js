const { Telegraf } = require("telegraf")
const config = require("") // ho un file json unico con tutti i token dei bot

const bot = new Telegraf(config.dissociatore.telegram_token) // { "dissociatore": { "discord_token": "foo", telegram_token: "bar" } }
console.log("Il bot Telegram (@midissocioh_bot) è online!")

bot.command("midissocio", (ctx) => {
        ctx.reply("🔃 Processo di dissociamento iniziato.")
        setTimeout(() => {
                ctx.reply("⛔ Sto consultando il database di messaggi che potrebbero portarti al dissociamento...")
        setTimeout(() => {
                ctx.reply("⌚ La IA del bot sta indovinando il messaggio dal quale dissociarsi...")
                setTimeout(() => {
                ctx.reply("✅ Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
                setTimeout(() => {
                                        if (Math.floor(Math.random() * 28) === 7) {
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

bot.command("miassocio", (ctx) => {
        ctx.reply("🔃 Processo di associamento iniziato.")
        setTimeout(() => {
                ctx.reply("⛔ Sto consultando il database di messaggi che potrebbero portarti all'associamento...")
        setTimeout(() => {
                ctx.reply("⌚ La IA del bot sta indovinando il messaggio al quale associarsi...")
                setTimeout(() => {
                ctx.reply("✅ Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
                setTimeout(() => {
                                        ctx.reply("⌚ Associamento in corso...")
                                setTimeout(() => {
                                ctx.reply("✅ 100% associato.")
                                }, 15000)  
                }, 1000)
                }, 5000)
                }, 7000)
        }, 2000)
})

bot.command("dissociometro", (ctx) => {
        ctx.reply("✅ Oggi ti sei dissociato/a " + Math.floor(Math.random() * 1000001) + " volte! 😳")
})

bot.command("testuconlaccentosullau", (ctx) => {
        const cosimarsi = ["owo", "uwu", ";)", ":)", "sus", "forever", "<3", "u\\\\w\\\\u", "😳"]
        ctx.reply("testù " + cosimarsi[Math.floor(Math.random() * cosimarsi.length)])
})

bot.launch()

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))

// rip indent
