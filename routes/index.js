const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const { showHomepage } = require('../controllers/pages-controller');

/* GET home page. */
router.get('/', showHomepage)

router.post('/uploadfile', function (req, res, next) {
    
        if (err) {
            res.send('problem during travel');
        } else {
            res.send('File uploaded successfully');
        }
});



module.exports = router;
