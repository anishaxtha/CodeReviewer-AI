const aiService = require("../services/ai.service.js");

const promptController = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const response = await aiService(code);
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("Controller error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

module.exports = { promptController };
