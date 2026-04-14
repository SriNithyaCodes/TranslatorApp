const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { translate } = require('google-translate-api-x');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("Starting server...");

app.post('/api/translate', async (req, res) => {
  const { text, from, to } = req.body;
  
  console.log(`[API] Translation request: "${text.substring(0, 50)}..." from ${from || 'auto'} to ${to}`);

  try {
    // Sanitize: google-translate-api-x expects undefined for auto-detect or a valid code
    const options = {
      to: to || 'en'
    };
    if (from && from !== 'auto') {
      options.from = from;
    }

    const result = await translate(text, options);
    console.log(`[API] Success: "${result.text.substring(0, 50)}..."`);

    res.json({
      translatedText: result.text,
      from: result.from.language.iso // Include detected language
    });
  } catch (error) {
    console.error("[API] ERROR:", error.message);
    if (error.stack) console.error(error.stack);
    res.status(500).json({ error: "Translation failed", details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});