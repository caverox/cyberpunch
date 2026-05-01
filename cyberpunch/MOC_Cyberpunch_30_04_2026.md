# 🤖 MOC — Exército de Robôs — Cyberpunch

> Última atualização: 2026-04-30 Status: MCPs base instalados e configurados — iniciando Fazendinha_Spotify

---

## 🏛️ Arquitetura do Quartel

|Ferramenta|Papel|
|---|---|
|Obsidian|Quartel General — rotinas, prompts, ordens|
|Claude Desktop|Oficial de operações — lê as ordens e distribui|
|MCPs|Soldados especializados — cada um com sua função|
|Claude Code|Sala de crise — missões complexas|
|Git|Arquivo militar — tudo versionado|

- Repositório: `C:\Claude AI\Cyberpunch\Git\cyberpunch`
- Vault Obsidian: `C:\Claude AI\Cyberpunch\Git\cyberpunch`
- Config Claude Desktop: `%APPDATA%\Claude\claude_desktop_config.json`

---

## 📋 Legenda

- ✅ MCP disponível e funcionando
- 🔧 Configurado, aguardando teste/autenticação
- ⚠️ PART — MCP parcial ou alternativo necessário
- ❌ OUT — sem MCP, usar outro método
- 🔲 Pendente — não instalado ainda
- 🆕 Sugestão nova

---

## 🔧 Infraestrutura instalada

- Git v2.54.0 + GitHub Desktop
- Node.js v24.15.0 — `C:\Program Files\nodejs`
- Smithery CLI (global)
- Obsidian
- Claude Desktop Pro — ✅ reinstalado, MCPs aparecem

---

## 📦 MCPs — Status atual

|#|MCP|Pacote / Servidor|Status|Observações|
|---|---|---|---|---|
|1|Desktop Commander|`@wonderwhy-er/desktop-commander`|✅ Funcionando|Aparece no Claude Desktop|
|2|Spotify|`@darrenjaws/spotify-mcp`|🔧 Config OK|Falta autenticar|
|3|Google Drive|`@modelcontextprotocol/server-gdrive`|🔧 Config OK|Falta reiniciar e autenticar|
|4|Google Sheets|`@modelcontextprotocol/server-gsheets`|🔧 Config OK|Falta reiniciar e autenticar|
|5|Google Calendar|`@modelcontextprotocol/server-gcalendar`|🔧 Config OK|Falta reiniciar e autenticar|
|6|Gmail|`@modelcontextprotocol/server-gmail`|🔧 Config OK|Falta reiniciar e autenticar|
|7|Web Search|Brave Search API|🔲 Pendente|Precisa criar Brave API Key|
|8|WordPress|WordPress REST API|🔲 Pendente|Precisa URL + Application Password|
|9|Apify|Apify MCP|🔲 Pendente|Precisa Apify API Token|

---

## 🔑 Credenciais

### Spotify

- Client ID: `0d0205ac0bd043898eef1887e7f63350`
- Client Secret: `073e4d2efc5f4f24a609098def3ba335`
- Redirect URI: `http://127.0.0.1:3000/callback`

### Google Cloud OAuth

- Projeto: `able-brace-494903-v5`
- Client ID: `268501684060-ah74s0gmcqnla8frr7uavbnk1oq0pq77.apps.googleusercontent.com`
- Client Secret: `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`
- Redirect URI: `http://localhost`
- JSON salvo em: `C:\Claude AI\Cyberpunch\credentials\google_oauth.json`
- APIs ativadas: Drive, Sheets, Calendar, Gmail
- ⚠️ Token expira em 7 dias se app em modo "Testando" — publicar app ou renovar
- ⚠️ Gmail da banda ≠ Google Cloud owner (`netunobalboa@gmail.com`) — autenticar com email da banda no OAuth

### Pendentes

- Brave Search API Key — 🔲 não criado
- WordPress URL + Application Password — 🔲 não criado
- Apify API Token — 🔲 não criado

---

## 📄 claude_desktop_config.json atual

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@wonderwhy-er/desktop-commander@latest"]
    },
    "spotify": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@darrenjaws/spotify-mcp"],
      "env": {
        "SPOTIFY_CLIENT_ID": "0d0205ac0bd043898eef1887e7f63350",
        "SPOTIFY_CLIENT_SECRET": "073e4d2efc5f4f24a609098def3ba335",
        "SPOTIFY_REDIRECT_URI": "http://127.0.0.1:3000/callback"
      }
    },
    "gdrive": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gdrive"],
      "env": {
        "GDRIVE_CLIENT_ID": "268501684060-ah74s0gmcqnla8frr7uavbnk1oq0pq77.apps.googleusercontent.com",
        "GDRIVE_CLIENT_SECRET": "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",
        "GDRIVE_REDIRECT_URI": "http://localhost"
      }
    },
    "gsheets": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gsheets"],
      "env": {
        "GSHEETS_CLIENT_ID": "268501684060-ah74s0gmcqnla8frr7uavbnk1oq0pq77.apps.googleusercontent.com",
        "GSHEETS_CLIENT_SECRET": "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",
        "GSHEETS_REDIRECT_URI": "http://localhost"
      }
    },
    "gcalendar": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gcalendar"],
      "env": {
        "GCALENDAR_CLIENT_ID": "268501684060-ah74s0gmcqnla8frr7uavbnk1oq0pq77.apps.googleusercontent.com",
        "GCALENDAR_CLIENT_SECRET": "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",
        "GCALENDAR_REDIRECT_URI": "http://localhost"
      }
    },
    "gmail": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gmail"],
      "env": {
        "GMAIL_CLIENT_ID": "268501684060-ah74s0gmcqnla8frr7uavbnk1oq0pq77.apps.googleusercontent.com",
        "GMAIL_CLIENT_SECRET": "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",
        "GMAIL_REDIRECT_URI": "http://localhost"
      }
    }
  }
}
```

---

## 🗓️ Cronograma de construção

|Fase|Agente|Status|
|---|---|---|
|1|FS — Fazendinha Spotify|🔧 Em construção|
|2|CT — Contador|🔲 Pendente|
|3|SM — Social Media|🔲 Pendente|
|4|IT — Inteligência|🔲 Pendente|
|5|SM_MASTER + AG + BKP|🔲 Pendente|
|6|WM + CC + PR|🔲 Pendente|

---

## ✅ Próximos passos imediatos

1. Reiniciar Claude Desktop → verificar se Drive, Sheets, Calendar e Gmail aparecem
2. Autenticar Spotify (OAuth no app)
3. Autenticar Google com email da banda no OAuth
4. Criar Brave API Key e instalar Web Search MCP
5. Configurar WordPress MCP (URL + Application Password)
6. Configurar Apify MCP (API Token)
7. Construir prompt/fluxo da Fazendinha Spotify

---

## 🎵 FS — Fazendinha Spotify (FASE 1 — PRIORIDADE)

> Primeiro agente a ser construído. Ouve playlist, mostra calendário, gera evidências, registra execuções.

### Fluxo de operação

1. Mostrar calendário → escolher semana
2. Definir título: `Dennis Cyberpunch + Dia X até Dia Y`
3. Tocar playlist
4. Registrar músicas ouvidas (número + nome)
5. Tirar evidências (screenshot)
6. Salvar no Drive ou enviar para WhatsApp pessoal

### FS_Tocador

- Toca a playlist informada
- Guarda número e nome de cada música ouvida
- ✅ MCP: `Spotify MCP`

### FS_Evidencia

- Tira screenshot da execução no Spotify
- Salva em pasta no Drive: `/Drive/Evidencias/Spotify/`
- ⚠️ PART: `Desktop Commander` (screenshot) + `Google Drive MCP` (upload)
- ❌ WhatsApp = OUT (risco de ban) — fallback: Drive

---

## 💰 CT — Contador (FASE 2)

### CT_Contrato

- Lê contratos em PDF, lista regras, obrigações e valores
- ✅ MCP: `Google Drive MCP` + Claude

### CT_Planilha

- Insere dados financeiros em planilhas
- ✅ MCP: `Google Sheets MCP`

### CT_Nota 🆕

- Lê notas fiscais e extratos bancários, classifica e insere na planilha
- ⚠️ PART: `Google Drive MCP` + Claude

---

## 📱 SM — Social Media (FASE 3)

### SM_Redator

- Criação de copy, legendas, roteiros
- ✅ Agente de prompt puro

#### Copywriting

- Técnicas: AIDA, PAS, storytelling de venda
- ✅ Sem MCP externo necessário

#### SEO

- Otimização de hashtags e palavras-chave
- ✅ MCP: `Web Search MCP`

### SM_Designer

- Geração de artes e layouts visuais
- ⚠️ PART: `Ideogram MCP` ou `Replicate MCP` / alternativa local: ComfyUI

### SM_Video

- Corte, montagem, edição
- ❌ OUT: FFmpeg via Claude Code

### SM_Foto

- Retoque e ajustes de imagem
- ❌ OUT: ImageMagick ou Python Pillow

### SM_Calendario 🆕

- Planeja calendário de postagens do mês, cruza com Agenda da banda
- ✅ MCP: `Google Calendar MCP`

---

## 🕵️ IT — Inteligência (FASE 4)

### IT_Planilha

- Inclui/extrai insumos das planilhas de inteligência
- ✅ MCP: `Google Sheets MCP`

### IT_Spy_Manual

- Busca informações dos @ fornecidos como insumo
- ⚠️ PART: `Web Search MCP` + Apify para Instagram

### IT_Spy_Desbravador

- Descobre novos perfis e notícias do setor
- ⚠️ PART: `Web Search MCP` + `Apify MCP`

### IT_Spy_Atualizacao

- Atualiza status de bandas e festivais na planilha
- ⚠️ PART: `Google Sheets MCP` + `Web Search MCP`

### IT_Alerta 🆕

- Monitora prazos de inscrição em festivais, dispara alerta antes do prazo
- ✅ MCP: `Google Calendar MCP` + `Google Sheets MCP`

---

## 🤖 SM_MASTER — Secretária Master (FASE 5)

> Agente central. Orquestra os demais, distribui ordens, centraliza o fluxo.

### AG — Agenda

- Calendário de atividades da banda, painel de entrada manual
- ✅ MCP: `Google Calendar MCP`

### AW — Assistente WhatsApp

- Fixa mensagens e cobranças automáticas
- ❌ OUT: WhatsApp Business API ou Evolution API
- ⚠️ Risco de ban em conta pessoal — usar número secundário

### PR — Assessor de Imprensa

- Monta press releases e emails para festivais/curadores
- ✅ MCP: `Google Sheets MCP` + Claude

### BKP — Backup Burocrático 🆕

- Coleta documentos de pastas locais e sobe para o Drive
- ✅ MCP: `Desktop Commander` + `Google Drive MCP`
- ⚠️ Regras a definir: pastas, tipos de arquivo, frequência

---

## 🌐 WM — Webmaster (FASE 6)

- Publica e edita conteúdo no site da banda no WordPress
- ✅ MCP: `WordPress MCP` (REST API + Application Password)

---

## 🎼 CC — Compositor Comercial (FASE 6)

- Monitora tendências sonoras e visuais hypadas para inspiração
- ✅ MCP: `Web Search MCP` + `Spotify MCP`

---

## 📦 MCPs a instalar — Ordem de prioridade

|#|MCP|Usado por|
|---|---|---|
|1|Spotify MCP|FS_Tocador, CC|
|2|Google Drive MCP|BKP, CT_Contrato, FS_Evidencia|
|3|Google Sheets MCP|CT_Planilha, IT_Planilha, IT_Alerta, PR|
|4|Google Calendar|AG, SM_Calendario, IT_Alerta|
|5|Web Search MCP|SEO, IT_Spy, CC|
|6|WordPress MCP|WM|
|7|Apify MCP|IT_Spy_Desbravador, IT_Spy_Manual|

---

## ⚠️ Alertas e decisões pendentes

- **WhatsApp**: sem MCP seguro. Fallback padrão = Google Drive. Reavaliar com número secundário.
- **Instagram**: sem MCP oficial. Usar Apify como alternativa.
- **Vídeo/Foto**: processamento local via FFmpeg/ImageMagick no Claude Code.
- **BKP Burocrático**: aguardando regras de pastas, tipos de arquivo e frequência.
- **Economia de tokens**: prompts enxutos, respostas em JSON/Markdown, sem histórico longo.
- **Google OAuth**: app em modo "Testando" — token expira em 7 dias. Publicar app para tokens permanentes.
- **Gmail da banda** ≠ Google Cloud owner (`netunobalboa@gmail.com`) — autenticar com email correto no OAuth.
- **Credenciais Google**: mover de `C:\Users\User\Downloads\` para `C:\Claude AI\Cyberpunch\credentials\` (local seguro).