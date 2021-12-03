const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, DiscordAPIError, Message, Channel } = require('discord.js');
const { channel } = require('diagnostics_channel');
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	]
 });
message.guild.channels.find(channel => channel.name === "test");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('startqueue')
		.setDescription('Start the inhouse queue.')
		.addStringOption(option => option.setName('time').setDescription('Enter the time the lobby will start.')),

	async execute(interaction) {
	const top = "<:Top_icon:916087719397036113>";
	const jungle = "<:jungleicon:916087719430590474> ";
	const mid = "<:midicon:916087719749369856>";
	const ADC = "<:adcicon:916087719095074827>";
	const support = "<:supporticon:916087719413825637>";
	const string = interaction.options.getString('time');

	const exampleEmbed = new MessageEmbed()
		.setColor('#660066')
		.setTitle(`Lobby created for ${string}.`)
		.addField(top, '\u200B')
		.addField(jungle, '\u200B')
		.addField(mid, '\u200B')
		.addField(ADC, '\u200B')
		.addField(support, '\u200B')
		.setFooter('Use !queue [role] to join or !leave to leave. | All non-queue messages will be deleted.');
		//await interaction.reply({ embeds: [exampleEmbed] });

	channel.send({ embeds: [exampleEmbed] });
	
	const receivedEmbed = message.embeds[0];
	const filter = m => m.content.includes('!queue');
	const collector = interaction.channel.createMessageCollector({ filter });

	collector.on('collect', m => {
		if(m.content.includes("top")) {
			console.log("top")

		} else if ((m.content.includes("jg") || m.content.includes("jungle"))) {
			console.log("jg")

		} else if ((m.content.includes("mid") || m.content.includes("middle"))) {
			console.log("mid")

		} else if ((m.content.includes("adc") || m.content.includes("bot"))) {
			console.log("adc")

		} else if (m.content.includes("sup" || "supp" || "support")) {
			console.log("supp")

		} else
		console.log(`Collected error: ${m.content}`);
	});
		
	collector.on('end', collected => {
		console.log(`Collected ${collected.size} items`);
	});	

	},
};

//}
//);