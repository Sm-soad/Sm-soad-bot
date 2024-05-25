const fs = require("fs");
module.exports.config = {
	    name: "raj",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "ðŸ˜œ",
    cooldowns: 5,
  };

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("à¦°à¦¾à¦œ")==0 || event.body.indexOf("@ÃŠw-r KÃ¥wsÄ“r")==0 || event.body.indexOf("raj")==0 ||
event.body.indexOf("Raj")==0) {
		var msg = {
				body: "~ à¦†à¦®à¦¾à¦° à¦®à¦¾à¦²à¦¿à¦• https://www.facebook.com/toxic71soad à¦à¦–à¦¨ à¦¬à¦¿à¦œà¦¿ à¦†à¦›à§‡ à¦¯à¦¾ à¦¬à¦²à¦¾à¦° à¦¸à¦¨à§à¦§à¦¾ à§¬ à¦Ÿà¦¾à¦° à¦ªà¦°à§‡ à¦¬à¦²à¦¬à§‡à¦¨ à¦§à¦¨à§à¦¯à¦¬à¦¾à¦¦..!!",
				attachment: fs.createReadStream(__dirname + `/Nayan/malik.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("ðŸ˜»", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } 
