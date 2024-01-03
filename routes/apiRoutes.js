exports.getAPIKey = function(req, res) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        res.status(400).json({ error: 'No API key provided' });
    } else {
        res.status(200).json({ apiKey });
    }
};

exports.getGPTResponse = async function(req, res) {
    try {
        const { apiKey } = await getAPIKey();
        // call chatgpt api

    } catch (error) {

    }

}