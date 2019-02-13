const app = require('express')();
const bodyParser = require('body-parser');
const port = +process.argv.slice(2)[0] ||  process.env.PORT || 3001;


app.use(bodyParser.json());

app.use('/', require('./routes/team.js'));
app.use('/', require('./routes/user.js'));

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))
