const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' }); //could use multer( limits: { fileSize: 3145728 })
const { showHomepage } = require('../controllers/pages-controller');
const fs = require('fs');


const checkTypeSize = (req, res, next) => {
    const imgArr = req.files;
    const filteredArr = imgArr.filter(img => img.mimetype === "image/png" && img.size <= 3000000);
    imgArr.length != filteredArr.length ?
        res.render('index', { err: "You should upload .png files smaller than 3MB" }) :
        next()
}


/* GET home page. */
router.get('/', showHomepage);

router.post('/myupload', upload.array('myfiles'), checkTypeSize, (req, res, next) => {
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
