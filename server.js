const express = require('express');
const axios = require('axios');
const qs = require('query-string');
const app = express();

const PORT = 3001;

app.use(express.urlencoded({ extended: false }))

app.get('/api/tweets', (req, res) => {
    const q = req.query.q || 'coding'
    const count = req.query.count
    console.log(count)
    const apiUrl = 'https://api.twitter.com/1.1/search/tweets.json'
    const accessToken = 'AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG'
    const header = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }
    const params = {
        q,
        result_type: 'popular',
        count,
    };
    
    axios.get(`${apiUrl}?${qs.stringify(params)}`, header).then(items => {
        res.json({
            error: false,
            items: items.data.statuses,
        });
    })
    .catch(() => {
        res.json({
          error: true,
          message: 'Something went wrong',
        });
    });
});

app.listen(PORT, err => {
if (err) throw err;
console.log(`> Ready on http://localhost:3001`);
});
