const UnAuthenticatedError = require('../controllers/error');
const jwt = require ( 'jsonwebtoken');
const router = require('express').Router();
const{ checkAuth, signUp, signIn } = require('../controllers/AuthController');

const AuthMiddleware = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnAuthenticatedError('Authentication Invalid');
      }
  
      const token = authHeader.split(' ')[1];
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
      } catch (err) {
        throw new UnAuthenticatedError('Authentication Invalid');
      }
  
      next();
    } catch (err) {
      next(err);
    }
  };
  router.route('/signup').post(signUp);
  router.route('/signin').post(signIn);
  router.route('/check').get(AuthMiddleware, checkAuth);
  
  module.exports = router;