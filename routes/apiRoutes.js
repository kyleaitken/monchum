const OpenAI = require("openai");

const getAPIKey = () => process.env.OPENAI_API_KEY || undefined;

exports.getGPTResponse = async (req, res) => {
    console.log('apiRoutes.js getGPT');

    try {

        const userPrompt = req.body.userPrompt;

        const apiKey = await getAPIKey();
        if (!apiKey) {
            throw new Error('No API key available');
        }

        const openai = new OpenAI({ key: apiKey }); 

        const completion = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: userPrompt },
            ],
            model: 'gpt-3.5-turbo',
        });

        const generatedContent = completion.choices[0].message.content;
        return generatedContent;
        // res.status(200).json({ message: 'Hello from server' });

    } catch(error) {
        console.error('Error processing GPT response:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}