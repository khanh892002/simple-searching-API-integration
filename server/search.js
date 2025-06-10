const apiKey = "54d8394b6b67e9971caa11d856c8ef673c65e48b4e468ea5fec1e1e7bf476279";
module.exports = async (keyWord) => {
    if (!keyWord) return {status: 400, data: []}
    const url = `https://serpapi.com/search.json?engine=google&q=${keyWord}&api_key=${apiKey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return {status: 200, data: data.organic_results};
    } catch (error) {
        return {status: 500, data: []}
    }
}