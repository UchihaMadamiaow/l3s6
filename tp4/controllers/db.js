const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/prices';
const dbConnection = mongoose.createConnection(dbURI,{useNewUrlParser:true});
//
// const dbURI2 = 'mongodb://localhost/clients';
// const dbClient = mongoose.createConnection(dbURI2,{useNewUrlParser:true});

module.exports = dbConnection;
// module.exports = dbClient;

dbConnection.on('connected',
  () => console.log('db.js : connected to '+ dbURI)
);
dbConnection.on('disconnected',
  () => console.log('db.js : disconnected from '+ dbURI)
);
dbConnection.on('error',
  err => console.log('connection error '+ err)
);

// dbClient.on('connected',
//   () => console.log('db.js : connected to '+ dbURI2)
// );
// dbClient.on('disconnected',
//   () => console.log('db.js : disconnected from '+ dbURI2)
// );
// dbClient.on('error',
//   err => console.log('connection error '+ err)
// );

//
// "clean"  management of connection end
//
const shutdown = function(msg, callback) {
  dbConnection.close(() => {
      console.log(' Mongoose shutdown : '+msg);
      callback();
    }
  );
}

// application killed (ctrl+c)
process.on('SIGINT', () => shutdown('application ends', () => process.exit(0)) );
// for nodemon
process.once('SIGUSR2', () => shutdown('nodemon restarting', () => process.kill(process.pid, 'SIGUSR2')) );
// process killed (POSIX)
process.on('SIGTERM', () =>  shutdown('SIGTERM received', () => process.exit(0)) );
