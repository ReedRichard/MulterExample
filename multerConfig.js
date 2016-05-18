var multer = require('multer'),
    storage = multer.diskStorage(
    {
        filename: function(req, file, next){
            next(null, file.originalname);
        },
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
    }),
    multerUpload = multer({storage: storage}).single('image');

module.exports = multerUpload;
