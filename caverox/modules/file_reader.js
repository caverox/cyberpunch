const fs = require('fs');

module.exports = {
  async run(action, params) {
    if (action === 'read') {
      try {
        const content = fs.readFileSync(params.path, 'utf8');
        return { content };
      } catch (e) {
        return { error: e.message };
      }
    }
    return { error: 'Ação desconhecida' };
  }
};
