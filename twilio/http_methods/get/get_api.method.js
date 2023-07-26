const accountSid = "ACf6eb7f6a03fee7e2d082f813e9b60e0f";
const apiKey = "SK0e4a81df92ea5114f67d7c977853037e";
const apiSecret = "QAiEW8qL45tLfm8WPXCGIwb6OWyOYGhG";
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });

client.messages('SM00a837ae571b999ca7ed71a753baac46')
      .fetch()
      .then(message => console.log(message.to));
