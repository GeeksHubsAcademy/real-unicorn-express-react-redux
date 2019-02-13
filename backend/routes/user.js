const router = require('express').Router();

router.get('/', (req, res) => res.json({ code: 200, response: 'get user' }));
router.post('/', (req, res) => res.json({ code: 200, response: 'post user' }));
router.put('/', (req, res) => res.json({ code: 200, response: 'put user' }));
router.delete('/', (req, res) => res.json({ code: 200, response: 'delete user' }));

module.exports = router;