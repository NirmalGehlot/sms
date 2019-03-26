const accountSid = 'AC1410519c0eeabcbdd7df1f34efc4c00d';
const authToken = '47a98759076489a673a530de89a45afd';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
     from: '+12015968536',
     to: '+919632723045',
     body: 'hi its an trial from twilio'
   })
  .then(message => console.log(message.sid))
  .done();
