const express = require('express');

const app = express();

//  init middleware
app.use(express.json());

// define routes
app.use('/api/storage', require('./routes/api/storage'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));