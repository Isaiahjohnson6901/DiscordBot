const { client } = require("../index");

client.on("interactionCreate", async interaction => {
	if (!interaction.isCommand()) {
		console.log(interaction);
		
	//	await interaction.deferReply({ ephemeral: false }).catch(() => {});

	//	const cmd = client.slashCommands.get(interaction.commandName);
	//	if (!cmd)
	//		return interaction.followUp({ content: "An error has occured "});
		
	//	const args = [];
	//	interaction.options.array().map((x) => {
	//		if (x.value) args.push(x.value);
	//		if (x.name) args.push(x.name);
	//	});

	//	cmd.run(client, interaction, args);
	//}

	if (interaction.isButton()) {
		console.log(interaction);
		await interaction.reply('Pong');
		await wait(2000);
		awaitinteraction.editReply("You clicked me loser");
		//interaction.reply({ content: `${interaction.user.tag} clicked me!`, ephemeral: true});
	}

}})
