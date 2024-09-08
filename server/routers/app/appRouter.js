const express = require('express');
const { chat } = require('../../controllers/app/appController');
const router = express.Router();

router.post('/chat', chat);

module.exports = ("appRouter", router);