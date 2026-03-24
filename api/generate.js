export default async function handler(req, res) {
    const API_TOKEN = "R8_PMpJFt2knDHlExeoYk6Egi0hTfa5hA142RXDg";

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await fetch("https://api.replicate.com/v1/predictions", {
            method: "POST",
            headers: {
                "Authorization": `Token ${API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

