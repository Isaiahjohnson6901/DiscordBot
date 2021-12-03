module.exports = {
	name: 'messageCreate',
	execute(message) {
        console.log(message.content)
        const args = message.content.split(/ +/);
        ;
	},
};