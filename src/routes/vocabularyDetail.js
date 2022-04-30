const { Router } = require('express');

const controller = require('../controllers/vocabularyDetail');
const { checkJwt } = require('../middlewares');

/** @type {import('express').Router} */
const router = Router();

router.use(checkJwt);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/vocabularyDetail/:id', controller.getDetailAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.post('/', controller.create);

module.exports = router;
