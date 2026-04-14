const { translate } = require('google-translate-api-x');

const LANGUAGES = [
  { code: 'auto', name: 'Auto Detect' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'hi', name: 'Hindi' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ru', name: 'Russian' },
  { code: 'ar', name: 'Arabic' },
  { code: 'tr', name: 'Turkish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
];

async function check() {
  for (const lang of LANGUAGES) {
    if (lang.code === 'auto') continue;
    try {
      await translate('hello', { to: lang.code });
      console.log(`${lang.code} (${lang.name}) OK`);
    } catch (e) {
      console.log(`${lang.code} (${lang.name}) ERROR: ${e.message}`);
    }
  }
}
check();
