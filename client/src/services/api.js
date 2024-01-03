import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your server URL
const GPT_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const getAPIkey = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAPIKey`);
        console.log('getAPIKey', response.data);
        return response.data;
    } catch (error) {
        console.error('Error retrieving API key:', error);
        throw error;
    }
}

const getGPTResponse = async (userPrompt) => {
    try {
        const apiKey = await getAPIKey();

        const response = await axios.post(GPT_API_ENDPOINT, {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
        });

    } catch {

    }
}

export default { 
    getAPIkey 
};


