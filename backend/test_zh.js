const { translate } = require('google-translate-api-x');
async function test() {
  try {
    const res = await translate('hello', { to: 'zh-cn' });
    console.log('zh-cn:', res.text);
  } catch (e) {
    console.log('zh-cn ERROR:', e.message);
  }
}
test();
