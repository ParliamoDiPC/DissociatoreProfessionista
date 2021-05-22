// va

process.exit()

const Discord = require("discord.js")
const bot = new Discord.Client();

require("./midissocio")

bot.on("ready", () => {
	bot.user.setActivity("dissociarsi | fasm.ga/midissocio")
})

bot.ws.on('INTERACTION_CREATE', async interaction => {
	bot.api.interactions(interaction.id, interaction.token).callback.post({data: {
		type: 4,
		data: {
			content: ":arrows_clockwise: Processo di dissociamento iniziato."
		}
	}});

	await sleep(2000);

	await bot.api.webhooks(bot.user.id, interaction.token).messages('@original').patch({data: {
		content: ":no_entry: Sto consultando il database di messaggi che potrebbero portarti al dissociamento..."
	}});

	await sleep(7000);

	await bot.api.webhooks(bot.user.id, interaction.token).messages('@original').patch({data: {
		content: ":watch: La IA del bot sta indovinando il messaggio dal quale dissociarsi..."
	}});

	await sleep(5000);

	await bot.api.webhooks(bot.user.id, interaction.token).messages('@original').patch({data: {
		content: ":white_check_mark: Messaggio indovinato! (" + Math.floor(Math.random() * 1000000000000000001) + ")"
	}});

	await sleep(1000);

	if (Math.floor(Math.random() * 11) === 7) {
		await bot.api.webhooks(bot.user.id, interaction.token).messages('@original').patch({data: {
			content: ":x: Il dissociamento dal messaggio non è permesso."
		}});
	} else {
		await bot.api.webhooks(bot.user.id, interaction.token).messages('@original').patch({data: {
			content: ":watch: Il dissociamento dal messaggio è permesso, dissociamento in corso..."
		}});

		await sleep(15000);

		await bot.api.webhooks(bot.user.id, interaction.token).messages('@original').patch({data: {
			content: ":white_check_mark: **100% dissociato**."
		}});
	}
})

/*bot.ws.on("INTERACTION_CREATE", async interaction => {
	const command = interaction.data.name.toLowerCase();
	if (command === "dissociometro") {
		bot.api.interactions(interaction.id, interaction.token).callback.post({
			data: {
				type: 4,
				data: {
					content: ":white_check_mark: Oggi ti sei dissociato **" + Math.floor(Math.random() * 1000001) + "** volte! :flushed:"
				}
			}
		})
	}
})*/

bot.login()

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});

server.listen(3000);

