const router = require('express').Router();
const Content = require('../models/content.model');

router.get('/', async (req, res) => {
    const inSlug = req.body.slug;
    const data = await Content.findOneAndUpdate({
        slug: inSlug,
    }, {
        $push: {
            views: {
                timestamp: Date.now()
            }
        }
    });
});

module.exports = router;