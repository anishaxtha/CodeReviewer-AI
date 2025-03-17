require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// console.log(process.env.GOOGLE_GEMINI_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
  You are the code reviewer who have the expertise in development. You look  for the code  and find 
  the problems and suggest  the solution to the developer

  you always try to find the best solution for the developer and aslo try to make the code  more efficient 
  and clean.
  `,
});

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

module.exports = generateContent;
