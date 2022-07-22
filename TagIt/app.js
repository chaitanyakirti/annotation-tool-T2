const express =require('express');
const app = express();
const path = require('path');
const port = 8000;


app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('Organisation.pug', params);
})
app.listen(port, ()=>{
    console.log(`the application has started successfully on ${port}`);
});