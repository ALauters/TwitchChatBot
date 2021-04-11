const tmi = require('tmi.js');
const GPIO  = require('onoff').Gpio;

const chat_light = new GPIO(22, 'out');

// Define configuration options
const opts = {
  identity: {
    username: "USERNAME",
    password: "PASSWORD"
  },
  channels: [
    "CHANNEL_NAME"
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
// client.on('join', onJoinHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {

  // Ignore messages from the bot
  // Can filter out users by using context['display-name'] == '<NAME>'
  if (self) {return;}

  // Remove whitespace from chat message
  const commandName = msg.trim();

  switch(commandName){

   case '!dice':
      const num = rollDice();
      client.say(target, context['display-name'] + `, You rolled a ${num}`);
      break;

   case '!command':
      client.say(target, `TEXT FOR BOT TO SAY`);
      break;

  default:
      flash_3_times();
  }
}

const flash_3_times = async () =>{
  for(i=0; i<3; i++){
    chat_light.writeSync(1);
    await sleep(1000);
    chat_light.writeSync(0);
    await sleep(1000);
  }
}

const sleep = (howlong) =>{
  return new Promise((resolve) => {
    setTimeout(resolve, howlong)
  })
}


function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function onJoinHandler(channel, username, self) {
  flash_3_times();
  console.log(`${username} has joined\n`)
}

