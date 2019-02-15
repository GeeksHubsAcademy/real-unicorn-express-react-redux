const { UserModel } = require('../models/user');
const jwt = require('jsonwebtoken');

const jwtAuthorization = (req, res, next) => {
console.log('req.headers', req.headers);

  const token = req.header('Authorization');
  console.log('token', token);
  try {
    const userData = jwt.verify(token, 'jwt encrypt pass');
    console.log('verifyed!');


    UserModel.findById(userData._id)
      .then(data => {
        // req.user = data;
        console.log('then data:', data);
        next();
      })
      .catch(err => {
        console.log('.catch err:', err);

        res.status(401).json(err);
      });
  } catch (err) {
    console.log('catch err:', err);

    res.status(401).json(err);
  }
};

module.exports = jwtAuthorization;

// const User = require('../models/Users');
// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//     const token = req.header('Authorization');

//     try {
//         const userData = jwt.verify(token, 'jwt encrypt pass');

//         User.findById(userData._id).then(data => {
//             req.user = data;
//             next();
//         });
//     } catch (e) {
//         res.status(401).send(e);
//     }
// };

// module.exports = authenticate;
