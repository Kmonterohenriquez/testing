require('dotenv').config();
const express = require('express');
// const { SERVER_PORT } = process.env;

const app = express();

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));

