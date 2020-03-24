const log = console.log;
let clients = [];
class Utils {
  static removeClient = disconnectedId => {
    log(`disconnected ->${disconnectedId}`);
    clients = clients.filter(client => {
      return client.id !== disconnectedId;
    });
    log("no. of clients ", clients.length);
  };
  static updateClients = clientData => {
    clients.push(clientData);
    log("no. of clients ", clients.length);
  };
  static getClientByUUID = uuid =>{
      return clients.find((c)=> c.uuid == uuid);
  }
}

module.exports = Utils;
