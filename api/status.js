export default async function handler(req, res) {
    const API_TOKEN = "R8_PMpJFt2knDHlExeoYk6Egi0hTfa5hA142RXDg";
    const { id } = req.query;

    try {
        const response = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
            headers: { "Authorization": `Token ${API_TOKEN}` }
        });
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

