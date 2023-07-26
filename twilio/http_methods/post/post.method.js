const accountSid = "ACf6eb7f6a03fee7e2d082f813e9b60e0f";
const authToken = "7c86515488fff37b4131ac600306e5aa";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This will be the body of the new message!",
    from: "(814) 447-8220",
    to: "+91 6369631919",
  })
  .then((message) => console.log(message.sid));
