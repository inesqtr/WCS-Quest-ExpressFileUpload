const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const { showHomepage } = require('../controllers/pages-controller');
const fs = require('fs');


const checkSize = (req, res, next) => {
    const imgArr = req.files;
    const filteredArr = imgArr.filter(img => img.size <= 3000000);
    imgArr.length != filteredArr.length ?
        res.render('index', { err: "Your files size must be smaller than 3mb" }) :
        next()
}


/* GET home page. */
router.get('/', showHomepage);

router.post('/myupload', upload.array('myfiles'), checkSize, (req, res, next) => {
    req.files.forEach(file => {
        fs.rename(
            file.path,
            'public/images/' + file.originalname,
            (err) => {
                if (err) {
                    res.send('problem during travel');
                } else {
                    res.send('file uploaded successfuly')
                }
            })
    })
});


module.exports = router;
