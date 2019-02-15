const router = require('express').Router();
const { UserModel } = require('../models/user');
const jwtAuthorization = require('../middleware/jwtAuthorization');


router.get('/', jwtAuthorization , (req, res) => res.json({ code: 200, response: 'get user', headers: req.headers }));

router.post('/', (req, res) => {
  new UserModel({ ...req.body })
    .save()
    .then(data => {
        console.log('valid user register',data)
      res.json(data);
    })
    .catch(err =>{
        console.error('invalid user register', err);

         res.status(400).json((err))
    });
});
router.put('/', (req, res) => res.json({ code: 200, response: 'put user' }));
router.delete('/', (req, res) => res.json({ code: 200, response: 'delete user' }));

module.exports = router;
