const express = require('express');
const WebSocketLib = require('ws');
const SocketServer = WebSocketLib.Server;
const PORT = 3001;
const uniqueID = require('uuid');

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on port ${ PORT } `
  ));

const wss = new SocketServer({ server });

function broadcast(eventData) {
  wss.clients.forEach(client => { 
    if (client.readyState === WebSocketLib.OPEN) {
      client.send(eventData);
      }
  })
}

wss.on('connection', (ws) => {
    let clientsCount = wss.clients.size;
    const clientsConnectedPacket = JSON.stringify({serverMessage: clientsCount, type: 'clientCount' });
    broadcast(clientsConnectedPacket);

  ws.on('message', (message) => {
    const messageFromClient = JSON.parse(message);

    if(messageFromClient.messages.type === 'postMessage') {
      const uID = uniqueID();          
      messageFromClient.messages.id = uID;
      messageFromClient.messages.type = 'incomingMessage';
    } 

    if(messageFromClient.messages.type === 'postNotification') {
      messageFromClient.messages.type = 'incomingNotification';     
    }

    const serverTransformedMessage = JSON.stringify(messageFromClient);
    
    broadcast(serverTransformedMessage);

  });
  
  ws.on('close', () =>  {
    console.log('connected closed');
    clientsCount -= 1;
    const clientsConnectedPacket = JSON.stringify({serverMessage: clientsCount, type: 'clientCount' });
    broadcast(clientsConnectedPacket);
  });

});

