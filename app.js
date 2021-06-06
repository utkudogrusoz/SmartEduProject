const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hoşgeldiniz",
        status: 200
    });

});

const port = 3000;
app.listen(port, () => {
    console.log('app started on port', port);
});