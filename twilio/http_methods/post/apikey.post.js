//api secret key authentication

const accountSid = "ACf6eb7f6a03fee7e2d082f813e9b60e0f";
const apiKey = "SK0e4a81df92ea5114f67d7c977853037e";
const apiSecret = "QAiEW8qL45tLfm8WPXCGIwb6OWyOYGhG";
const client = require("twilio")(apiKey, apiSecret, { accountSid: accountSid });

client.messages
  .create({
    body: "This will be the body of the new message!",
    from: "(814) 447-8220",
    to: "+91 6369631919",
  })
  .then((message) => console.log(message.sid));
