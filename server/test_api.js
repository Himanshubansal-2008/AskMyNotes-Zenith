import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

async function test() {
    try {
        console.log('Testing with model: gemini-flash-latest');
        const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });
        const result = await model.generateContent('Hello');
        console.log('Response:', result.response.text());
    } catch (e) {
        console.error('Error:', e.message);
    }
}

test();
