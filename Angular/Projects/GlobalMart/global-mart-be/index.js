const express = require('express');
const cors = require('cors');

require('dotenv').config()
const cartServer = express();
cartServer.use(cors());
cartServer.use(express.json());

const PORT = 3000;
require('./DB/connection');

const router = require('./Routers/router');
const userRoutes = require('./Routers/userRoutes')
cartServer.use(router);
cartServer.use(userRoutes);

cartServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

cartServer.get('/', (req, res) => {
    res.send('<h3>Cart server runnning successfully</h3>');
})