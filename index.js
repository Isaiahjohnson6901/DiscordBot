const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageEmbed } = require('discord.js');

// Create a new client instance
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	]
 });

 module.exports = {
    client
};

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

const { MessageActionRow, MessageButton } = require('discord.js');

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) 
		return;

	const { commandName } = interaction;
	const exampleEmbed = new MessageEmbed().setTitle('Some title');
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)

	channel.send({ embeds: [exampleEmbed] });

	if (interaction.commandName === 'startqueue') {
		await interaction.reply("Type <role> <IGN> to be added to the queue.")
		const filter = m => m.content.includes('discord');
		const collector = interaction.channel.createMessageCollector({ time: 15000 });
	
		
		collector.on('collect', m => {
			console.log(`Collected ${m.content}`);
		});
		
		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		});
	}
});

client.login(token);


	/**if (interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId("Jungle")
					.setLabel("Jungle")
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId("Mid")
					.setLabel("Mid")
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId("ADC")
					.setLabel("ADC")
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId("Support")
					.setLabel("Support")
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}*/ 