const express = require('express');
const { createProduct } = require('../controller/product');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const multer = require('multer');
const router =  express.Router();
const shortid = require('shortid');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })

const upload = multer({ storage })

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);

module.exports = router;