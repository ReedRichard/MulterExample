var express = require('express'),
    router = express.Router(),
    path = require('path'),
    upload = require('../multerConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Upload a photo */
router.post('/pictures/upload', function(req, res, next) {
  upload(req, res, function(err){
      res.redirect('/');
  });
});

/* Download a photo */
router.get('/picture/download', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../uploads/', req.query.imageName), null, function(err){
        if(err) next(err);
    });
});

module.exports = router;
