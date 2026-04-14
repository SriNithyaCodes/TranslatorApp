const { translate } = require('google-translate-api-x');

async function test() {
  try {
    const res = await translate('Hello', { to: 'es' });
    console.log('SUCCESS:', res.text);
  } catch (err) {
    console.error('FAILURE:', err);
  }
}

test();
