const express = require('express');

const app = express();

app.get('/locations', (req, res) => {
    res.json();
});



app.listen(3001, () => console.log("server is running"))