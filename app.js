const express = require('express');
const app = express();
const port = 3100
app.locals.pretty = true; //코드 예쁘게 보이기
app.use(express.static('public')); //정적인 화면 출력

//템플릿 엔진 사용
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/template', function (req,res){
    res.render('temp', {title:'pug', comment:'hihi'}); //두번째 인자로 객체 전달
})

app.get('/', (req, res) => {
    res.send('Home page!')
})

app.get('/login', (req, res) => {
    res.send('Login page!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
