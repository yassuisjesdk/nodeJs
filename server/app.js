let express = require('express');
const path = require('path');

let app = express();


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/page1', function(req, res){
    res.send("<h2>sono la page1 </h2>");
});

app.listen(3000, function(){
    console.log("Server attivo sulla porta 3000");
})