const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

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
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};