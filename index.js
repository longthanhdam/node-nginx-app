const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js with Nginx and Kubernetes!');
});
// Route thứ hai
app.get('/update', (req, res) => {
    res.send('Update Node.js with Nginx and Kubernetes! 1st');
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});

