const express = require('express');
const app = express();
const port = 3100
app.use(express.static('public')); //정적인 화면 출력

app.get('/', (req, res) => {
    res.send('Home page!')
})

app.get('/login', (req, res) => {
    res.send('Login page!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
