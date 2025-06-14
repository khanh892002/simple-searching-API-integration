const apiKey = "54d8394b6b67e9971caa11d856c8ef673c65e48b4e468ea5fec1e1e7bf476279";

module.exports = async (req, res) => {
    const keyWord = req.query.q;
    if (!keyWord) return res.status(400).json({error: 'Missing key word'});

    try {
        const url = `https://serpapi.com/search.json?engine=google&q=${keyWord}&api_key=${apiKey}`;
        // const url = `https://cors-anywhere.herokuapp.com/google.com/search?${search.replace(/\s+/g, '%20')}`;
        // not stable, there is a rate limit, easily blocked
        const response = await fetch(url);
        const data = await response.json();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch from SerpAPI'});
    }
}