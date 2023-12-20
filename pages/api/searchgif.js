// pages/api/searchGIFs.js

export default async function handler(req, res) {
  const { query } = req.query; // Get the search query from the request

  try {
    const API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    res.status(200).json(data); // Return the fetched data
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    res.status(500).json({ error: "Error fetching GIFs" });
  }
}
