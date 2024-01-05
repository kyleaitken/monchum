import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your server URL

const getGPTResponse = async (userPrompt) => {
    console.log('in api.js getGPT response');
    try {
        const response = await axios.post(`${API_BASE_URL}/getGPTResponse`, {
            userPrompt: userPrompt,
        });
        console.log(response);
        return response.data.message;

    } catch (error) {
        console.error('Error retrieving API key:', error);
        throw error;
    }
}

export default getGPTResponse;


