//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.set('port', (process.env.PORT || 4200));

// Serve only the static files form the dist directory
app.use(express.static('./dist/Angular8SpringBoot'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Angular8SpringBoot/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function() {
  console.log('Node executando na porta ', app.get('port'));
  console.log('Endereço: http://localhost:4200');
});