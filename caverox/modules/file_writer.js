const fs = require('fs');
const path = require('path');

module.exports = {
  async run(action, params) {
    if (action === 'write') {
      try {
        const dir = path.dirname(params.path);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(params.path, params.content, 'utf8');
        return { ok: true };
      } catch (e) { return { error: e.message }; }
    }
    return { error: 'Acao desconhecida' };
  }
};
