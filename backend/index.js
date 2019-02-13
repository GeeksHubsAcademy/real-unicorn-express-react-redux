const app = require('express')();
const bodyParser = require('body-parser');
const port = +process.argv.slice(2)[0] ||  process.env.PORT || 3001;


app.use(bodyParser.json());

app.use('/team', require('./routes/team'));
app.use('/user', require('./routes/user'));
app.use('/role', require('./routes/role'));

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))
