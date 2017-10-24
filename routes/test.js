'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
// const knex = require('../knex');
const { camelizeKeys } = require('humps');
// const { checkAuth } = require('./auth-middleware');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.get('/test', (req, res, next) => {
  // const { userId, access } = req.token;
  res.sendStatus(200);
});

module.exports = router;
