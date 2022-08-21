const express= require('express');
const homeRouter= require('./routes/homeRoutes')
const app = express();
// server port
const dotenv = require('dotenv').config();
const PORT=process.env.SERVER_PORT || 3000;


app.use(express.static('public'))
app.use(homeRouter);

app.use((req,res,next) =>{
    res.status(404).send(`<h1>Not found, Please type correct URL</h1>`)
})
app.listen(PORT,(req, res) => {
    console.log(`server is listening on http://localhost:${PORT}`);
})


