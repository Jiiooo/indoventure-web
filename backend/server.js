const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Menambahkan middleware untuk parsing JSON

const db =mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database:'crud'
})

app.get('/', (req, res) => { // Memperbaiki typo: re menjadi req
    return res.json("From Backend side");
});

const port = 8081;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});