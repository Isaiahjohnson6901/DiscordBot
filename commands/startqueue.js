// `m` is a message object that will be passed through the filter function
const filter = m => m.content.includes('discord');
const collector = interaction.channel.createMessageCollector({ filter, time: 15000 });

collector.on('collect', m => {
	console.log(`Collected ${m.content}`);
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} items`);
});