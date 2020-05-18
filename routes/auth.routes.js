const express = require('express');
const User = require('../models/user.model');

const authRoutes = express.Router();

authRoutes.route('/login').get(function (req, res) {});

authRoutes.route('/logout').get(function (req, res) {});

module.exports = authRoutes;
