
# 🎵 Spotify MCP — Instalação e Configuração

**Data:** 01/05/2026 **Ambiente:** Windows 11, Claude Desktop, Node.js v24.15.0 **Pacote:** `@darrenjaws/spotify-mcp`

---

## Pré-requisitos

- Node.js instalado (`node -v` para verificar)
- Claude Desktop instalado
- Conta Spotify

---

## Caminho Feliz

### Passo 1 — Criar app no Spotify Developer

🧑 **Só humano consegue fazer**

1. Acesse https://developer.spotify.com/dashboard
2. Faça login com sua conta Spotify
3. Clique em **"Create app"** e preencha:
    - App name: qualquer nome (ex: "My Spotify MCP")
    - App description: qualquer descrição
    - Redirect URI: `http://127.0.0.1:3000/callback` ← exato, sem barra no final
    - API/SDKs: marcar **"Web API"**
4. Salve. Na tela do app, copie o **Client ID** e clique em **"View client secret"** para copiar o **Client Secret**

---

### Passo 2 — Instalar o pacote MCP

🤖 **Commander consegue fazer**

```bash
npm install -g @darrenjaws/spotify-mcp
```

Após instalar, o `bin.js` estará em:

```
C:\Users\{USER}\AppData\Roaming\npm\node_modules\@darrenjaws\spotify-mcp\build\bin.js
```

---

### Passo 3 — Configurar o Claude Desktop

🤖 **Commander consegue fazer**

Editar o arquivo:

```
C:\Users\{USER}\AppData\Roaming\Claude\claude_desktop_config.json
```

Adicionar dentro de `mcpServers`:

```json
"spotify": {
  "command": "C:\\Program Files\\nodejs\\node.exe",
  "args": ["C:\\Users\\{USER}\\AppData\\Roaming\\npm\\node_modules\\@darrenjaws\\spotify-mcp\\build\\bin.js"],
  "env": {
    "SPOTIFY_CLIENT_ID": "SEU_CLIENT_ID",
    "SPOTIFY_CLIENT_SECRET": "SEU_CLIENT_SECRET",
    "SPOTIFY_REDIRECT_URI": "http://127.0.0.1:3000/callback"
  }
}
```

⚠️ Usar **caminho absoluto** do `node.exe` e do `bin.js`. Usar `npx` falha no Windows.

---

### Passo 4 — Reiniciar o Claude Desktop

🧑 **Só humano consegue fazer**

Fechar e reabrir o Claude Desktop para carregar o novo config.

---

### Passo 5 — Fazer o OAuth (primeira autenticação)

O servidor MCP roda em modo `stdio` — ele **não abre o browser automaticamente**. É necessário rodar um script separado que sobe um servidor HTTP na porta 3000 para capturar o callback do Spotify.

**5a — Criar o script de autenticação** 🤖 **Commander consegue fazer**

Salvar o arquivo `C:\Users\{USER}\spotify_auth.js`:

```javascript
const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');

const CLIENT_ID = 'SEU_CLIENT_ID';
const CLIENT_SECRET = 'SEU_CLIENT_SECRET';
const REDIRECT_URI = 'http://127.0.0.1:3000/callback';
const TOKEN_DIR = path.join(os.homedir(), '.spotify-mcp');
const TOKEN_FILE = path.join(TOKEN_DIR, 'tokens.json');

const state = crypto.randomBytes(32).toString('hex');
const scopes = 'user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-top-read user-read-recently-played user-follow-read user-follow-modify';
const authUrl = 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + CLIENT_ID + '&scope=' + encodeURIComponent(scopes) + '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) + '&state=' + state;

const server = http.createServer((req, res) => {
  if (!req.url || !req.url.startsWith('/callback')) { res.end('not found'); return; }
  const url = new URL(req.url, 'http://127.0.0.1:3000');
  const code = url.searchParams.get('code');
  if (!code) { res.end('no code'); return; }

  const creds = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');
  const body = 'grant_type=authorization_code&code=' + encodeURIComponent(code) + '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

  const postReq = https.request({
    hostname: 'accounts.spotify.com', path: '/api/token', method: 'POST',
    headers: { 'Authorization': 'Basic ' + creds, 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) }
  }, (r) => {
    let data = '';
    r.on('data', d => data += d);
    r.on('end', () => {
      const tokens = JSON.parse(data);
      const toSave = { accessToken: tokens.access_token, refreshToken: tokens.refresh_token, expiresAt: Date.now() + tokens.expires_in * 1000 };
      if (!fs.existsSync(TOKEN_DIR)) fs.mkdirSync(TOKEN_DIR, { recursive: true });
      fs.writeFileSync(TOKEN_FILE, JSON.stringify(toSave, null, 2));
      console.log('TOKEN_SAVED');
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.end('<h1>Autorizado com sucesso! Pode fechar esta aba.</h1>');
      setTimeout(() => { server.close(); process.exit(0); }, 1000);
    });
  });
  postReq.write(body);
  postReq.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.log('SERVER_READY');
  // Salva URL em arquivo por causa do bug do Windows com URLs longas no terminal
  fs.writeFileSync('C:/Users/' + os.userInfo().username + '/auth_url.txt', authUrl);
  console.log('URL salva em auth_url.txt');
});
```

**5b — Rodar o script** 🤖 **Commander consegue fazer**

```bash
& "C:\Program Files\nodejs\node.exe" "C:\Users\{USER}\spotify_auth.js"
```

**5c — Abrir a URL no browser** 🧑 **Só humano consegue fazer**

O script salva a URL em `C:\Users\{USER}\auth_url.txt`. Abrir o arquivo, copiar a URL e colar no browser manualmente.

⚠️ **Não usar** `start chrome "URL"` no Windows — o comando corta URLs longas, causando erros como "response_type must be code" ou "client_id: Not present".

**5d — Autorizar no Spotify** 🧑 **Só humano consegue fazer**

Clicar em **"Aceitar"** na página do Spotify. O browser mostrará "Autorizado com sucesso!" e o token será salvo automaticamente.

---

### Passo 6 — Verificar o token salvo

Token salvo em:

```
C:\Users\{USER}\.spotify-mcp\tokens.json
```

Formato correto (atenção ao camelCase):

```json
{
  "accessToken": "...",
  "refreshToken": "...",
  "expiresAt": 1777640814049
}
```

O `refreshToken` é permanente. O `accessToken` expira em ~1h e é renovado automaticamente pelo servidor.

---

### Passo 7 — Testar

🤖 **Claude consegue fazer**

Perguntar ao Claude: _"o que está tocando no Spotify?"_

---

## ⚠️ Tropeços Conhecidos

### 1. Token com formato errado

**Problema:** Token salvo manualmente usando `snake_case` (`access_token`, `expires_at`). **Sintoma:** Servidor ignora o arquivo e pede autenticação a cada chamada. **Solução:** O formato correto é `camelCase`: `accessToken`, `refreshToken`, `expiresAt`.

### 2. `start chrome` corta URLs longas no Windows

**Problema:** `cmd /c start chrome "URL_LONGA"` corta a URL no primeiro `&`. **Sintoma:** Erros "response_type must be code" ou "client_id: Not present" no Spotify. **Solução:** Salvar a URL em um `.txt` e copiar/colar manualmente no browser.

### 3. Porta 3000 já em uso

**Problema:** Tentar rodar o script de auth enquanto uma instância anterior ainda está ativa. **Sintoma:** `Error: listen EADDRINUSE: address already in use 127.0.0.1:3000` **Solução:** Matar o processo Node.js anterior antes de rodar o script novamente.

```bash
netstat -ano | findstr ":3000"
taskkill /PID {PID} /F
```

### 4. Usar `npx` no config do Claude Desktop

**Problema:** Configurar o MCP usando `npx` como comando. **Sintoma:** Servidor não inicializa corretamente no Windows. **Solução:** Usar caminho absoluto do `node.exe` e do `bin.js`.

### 5. Servidor MCP não abre o browser sozinho

**Problema:** Esperar que o Claude Desktop dispare o OAuth automaticamente. **Sintoma:** Claude retorna URL para abrir manualmente, mas a porta 3000 não está ativa — browser retorna ERR_CONNECTION_REFUSED. **Causa:** Servidor MCP roda em modo `stdio`, porta 3000 só sobe via script separado. **Solução:** Sempre usar o `spotify_auth.js` para a primeira autenticação.

---

## Arquivos Relevantes

|Arquivo|Descrição|
|---|---|
|`C:\Users\{USER}\AppData\Roaming\Claude\claude_desktop_config.json`|Config principal do Claude Desktop|
|`C:\Users\{USER}\.spotify-mcp\tokens.json`|Token OAuth do Spotify|
|`C:\Users\{USER}\spotify_auth.js`|Script de autenticação OAuth (pode deletar após autenticar)|
|`C:\Users\{USER}\AppData\Roaming\npm\node_modules\@darrenjaws\spotify-mcp\build\bin.js`|Binário do servidor MCP|