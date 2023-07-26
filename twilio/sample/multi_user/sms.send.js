const accountSid = "ACf6eb7f6a03fee7e2d082f813e9b60e0f";
const authToken = "7c86515488fff37b4131ac600306e5aa";
const client = require("twilio")(accountSid, authToken);

const numbersToMessage = ["+91 6369631919", "+91 9092946439", "+91 6374791508"];

client.messages
  .create({
    body: "Dear customer welcome to the twilio enjoy your unlimited conversations with twilio ",
    from: "(814) 447-8220",
    to: numbersToMessage,
  })
  .then((numbersToMessage) => console.log(numbersToMessage.sid));
