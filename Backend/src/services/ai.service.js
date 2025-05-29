const { OpenAI } = require('openai');
const { healthPrompt } = require('../model/promptModel');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getHealthAnswer(userQuestion) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: healthPrompt },
        { role: "user", content: userQuestion }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    throw new Error("Failed to get response from AI.");
  }
}

module.exports = { getHealthAnswer };
