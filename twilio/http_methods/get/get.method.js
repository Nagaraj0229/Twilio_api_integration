
const accountSid = "ACf6eb7f6a03fee7e2d082f813e9b60e0f";
const authToken = "7c86515488fff37b4131ac600306e5aa";
const client = require('twilio')(accountSid, authToken);

client.messages('SM00a837ae571b999ca7ed71a753baac46')
      .fetch()
      .then(message => console.log(message.to))