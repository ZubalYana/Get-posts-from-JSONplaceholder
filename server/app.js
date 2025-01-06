const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const axios = require('axios');

app.use(express.json());
app.use(cors());

app.get('/posts', async (req, res) => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    }catch(error){
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));