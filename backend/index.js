const express = require('express');
const app = express();
const port = +process.argv.slice(2)[0] ||  process.env.PORT || 3001;
console.log(process.argv);

app.get('/',console.log);

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))
