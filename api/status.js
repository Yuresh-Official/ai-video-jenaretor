export default async function handler(req, res) {
    const API_TOKEN = "R8_PMpJFt2knDHlExeoYk6Egi0hTfa5hA142RXDg";
    const { id, type } = req.query;

    try {
        // Credits/Balance පරීක්ෂා කිරීම
        if (type === "account") {
            const accRes = await fetch("https://api.replicate.com/v1/account", {
                headers: { "Authorization": `Token ${API_TOKEN}` }
            });
            const accData = await accRes.json();
            return res.status(200).json(accData);
        }

        // වීඩියෝ එකේ තත්ත්වය පරීක්ෂා කිරීම
        const response = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
            headers: { "Authorization": `Token ${API_TOKEN}` }
        });
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
