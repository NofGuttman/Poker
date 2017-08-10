let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static('view'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/view/index2.html');
});

app.listen(3000, function(){
    console.log('App is now running at PORT 3000')
});