const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(cors());
server.use(helmet());

module.exports = server;