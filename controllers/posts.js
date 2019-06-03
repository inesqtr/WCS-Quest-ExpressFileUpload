const showAllPosts = (req, res, next) => {
    const examplePosts = [
        { title: 'Cool Post', content: 'This post is amazing, you should def read it.' },
        { title: 'Coding is awesome', content: 'Meet an ex cook that learned to code.' }
    ];

    res.render('posts', { posts: examplePosts });
}

module.exports = { showAllPosts };