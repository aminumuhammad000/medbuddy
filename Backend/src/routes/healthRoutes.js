const express = require('express');
const router = express.Router();
const { getHealthAnswer } = require('../services/healthService');

router.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const answer = await getHealthAnswer(question);
    res.json({ question, answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;