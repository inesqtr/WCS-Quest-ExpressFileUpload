var express = require('express');
var router = express.Router();
const { showAllPosts } = require(__dirname + '/../controllers/posts');

/* GET posts list */
router.get('/', showAllPosts);

module.exports = router;
