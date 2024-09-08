const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// To get the review of the code
const chat = async (req, res) => {
    try {
        
        const { query } = req.body;
        const prompt = `Act as a Disaster analyst and first-aid helper. You should give answer only the disaster and first-aid emergency related query only otherwise give response as sorry i don't know about your query. \nquery: ${query}\nNote: Give response on a paragraph of maximum 150 words`;

        const result = await model.generateContent(prompt);
        const response = result.response.text().replace(/[\n*]/g, '').trim();

        res.status(200).json({ "data":  response});
    }   catch (e) {
        res.status(400).json({ "error": e.message });
    }
}

module.exports = { chat };