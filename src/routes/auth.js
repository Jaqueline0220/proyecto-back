const { Router } = require('express');

const controller = require('../controllers/auth');
const controllerPersona = require('../controllers/corePersona');
const validation = require('../validations/corePersona');
/** @type {import('express').Router} */
const router = Router();

router.post('/signin', controller.signIn);
router.post('/corePersona', validation.create, controllerPersona.create);
module.exports = router;
