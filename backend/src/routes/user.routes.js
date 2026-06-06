const express = require('express');
const protect = require('../middlewares/auth.middleware');
const authorize = require('../middlewares/authorize.middleware');
const authController = require('../controllers/auth.controller');
const router = express.Router();

/*
|--------------------------------------------------------------------------
| Admin Route
|--------------------------------------------------------------------------
*/

router.get(
  '/admin/dashboard',
  protect,
  authorize('admin'),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Welcome Admin'
    });
  }
);

/*
|--------------------------------------------------------------------------
| Test Route
|--------------------------------------------------------------------------
*/

router.get('/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get all users'
  });
});

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/

router.post(
  '/register',
  authController.register
);

router.post(
  '/login',
  authController.login
);

module.exports = router;