const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const routeSetup = require('./routes');

server.use(express.json());
server.use(cors());
server.use(helmet());
routeSetup(server);

module.exports = server;