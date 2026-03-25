const axios = require('axios');
const cheerio = require('cheerio');

export default async function handler(req, res) {
    try {
        const { data } = await axios.get('https://song.lk/', {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $ = cheerio.load(data);
        const songs = [];

        $('.song-item').each((i, el) => {
            if (i < 15) {
                const title = $(el).find('.title').text().trim();
                const artist = $(el).find('.artist').text().trim();
                songs.push({
                    title: title,
                    artist: artist,
                    searchQuery: `${title} ${artist} official song`,
                    img: $(el).find('img').attr('src')
                });
            }
        });
        res.status(200).json(songs);
    } catch (e) {
        res.status(500).json({ error: "Data fetch error" });
    }
}
