
# 🤖 MOC — Exército de Robôs — Cyberpunch

> Última atualização: 2026-05-01 Status: Spotify ✅ autenticado e funcionando — estrutura de pastas criada — iniciando próxima fase

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
- Pasta dos agentes: `C:\Claude AI\Cyberpunch\agents\`
- Credenciais: `C:\Claude AI\Cyberpunch\credentials\`

---

## 📋 Legenda

- ✅ Funcionando
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
- Claude Desktop Pro — ✅ instalado, MCPs aparecem

---

## 📦 MCPs — Status atual

|#|MCP|Pacote / Servidor|Status|Observações|
|---|---|---|---|---|
|1|Desktop Commander|`@wonderwhy-er/desktop-commander`|✅ Funcionando||
|2|Spotify|`@darrenjaws/spotify-mcp`|✅ Funcionando|Autenticado em 01/05/2026|
|3|Google Drive|`@modelcontextprotocol/server-gdrive`|🔧 Config OK|Falta autenticar|
|4|Google Sheets|`@modelcontextprotocol/server-gsheets`|🔧 Config OK|Falta autenticar|
|5|Google Calendar|`@modelcontextprotocol/server-gcalendar`|🔧 Config OK|Falta autenticar|
|6|Gmail|`@modelcontextprotocol/server-gmail`|🔧 Config OK|Falta autenticar|
|7|Web Search|Brave Search API|🔲 Pendente|Precisa criar Brave API Key|
|8|WordPress|WordPress REST API|🔲 Pendente|Precisa URL + Application Password|
|9|Apify|Apify MCP|🔲 Pendente|Precisa Apify API Token|

---

## 🔑 Credenciais

### Spotify

- Client ID: `SEU_SPOTIFY_CLIENT_ID`
- Client Secret: `SEU_SPOTIFY_CLIENT_SECRET`
- Redirect URI: `http://127.0.0.1:3000/callback`
- Token salvo em: `C:\Users\User\.spotify-mcp\tokens.json`

### Google Cloud OAuth

- Projeto: `able-brace-494903-v5`
- Client ID: `SEU_GOOGLE_CLIENT_ID`
- Client Secret: `SEU_GOOGLE_CLIENT_SECRET`
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

## 🗂️ Estrutura de pastas dos agentes

```
C:\Claude AI\Cyberpunch\agents\
└── CX - Caverox\
    ├── OR - Oraculo\
    │   ├── ENG - Engenheiro\
    │   ├── PRF - Professor\
    │   ├── GP - Gestor de Parametros\
    │   └── RL - Relogio e Agendador\
    ├── BKPT - Backup Tecnico\
    ├── LG - Log Geral\
    └── SM - Secretaria Master\
        ├── AG - Agenda\
        ├── AW - Assistente WhatsApp\
        ├── PR - Assessor de Imprensa\
        ├── BKP - Backup Burocratico\
        ├── FS - Fazendinha Spotify\
        │   ├── FS_Tocador - Tocador\
        │   │   └── memory.json  ← playlists salvas
        │   └── FS_Evidencia - Evidencia\
        ├── CT - Contador\
        │   ├── CT_Contrato - Contrato\
        │   ├── CT_Planilha - Planilha\
        │   └── CT_Nota - Nota Fiscal\
        ├── SM - Social Media\
        │   ├── SM_Redator - Redator\
        │   ├── SM_Designer - Designer\
        │   ├── SM_Video - Video\
        │   ├── SM_Foto - Foto\
        │   └── SM_Calendario - Calendario\
        ├── IT - Inteligencia\
        │   ├── IT_Planilha - Planilha\
        │   ├── IT_Spy_Manual - Spy Manual\
        │   ├── IT_Spy_Desbravador - Spy Desbravador\
        │   ├── IT_Spy_Atualizacao - Spy Atualizacao\
        │   └── IT_Alerta - Alerta\
        ├── WM - Webmaster\
        └── CC - Compositor Comercial\
```

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
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": ["C:\\Users\\User\\AppData\\Roaming\\npm\\node_modules\\@darrenjaws\\spotify-mcp\\build\\bin.js"],
      "env": {
        "SPOTIFY_CLIENT_ID": "SEU_SPOTIFY_CLIENT_ID",
        "SPOTIFY_CLIENT_SECRET": "SEU_SPOTIFY_CLIENT_SECRET",
        "SPOTIFY_REDIRECT_URI": "http://127.0.0.1:3000/callback"
      }
    },
    "gdrive": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gdrive"],
      "env": {
        "GDRIVE_CLIENT_ID": "SEU_GOOGLE_CLIENT_ID",
        "GDRIVE_CLIENT_SECRET": "SEU_GOOGLE_CLIENT_SECRET",
        "GDRIVE_REDIRECT_URI": "http://localhost"
      }
    },
    "gsheets": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gsheets"],
      "env": {
        "GSHEETS_CLIENT_ID": "SEU_GOOGLE_CLIENT_ID",
        "GSHEETS_CLIENT_SECRET": "SEU_GOOGLE_CLIENT_SECRET",
        "GSHEETS_REDIRECT_URI": "http://localhost"
      }
    },
    "gcalendar": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gcalendar"],
      "env": {
        "GCALENDAR_CLIENT_ID": "SEU_GOOGLE_CLIENT_ID",
        "GCALENDAR_CLIENT_SECRET": "SEU_GOOGLE_CLIENT_SECRET",
        "GCALENDAR_REDIRECT_URI": "http://localhost"
      }
    },
    "gmail": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["-y", "@modelcontextprotocol/server-gmail"],
      "env": {
        "GMAIL_CLIENT_ID": "SEU_GOOGLE_CLIENT_ID",
        "GMAIL_CLIENT_SECRET": "SEU_GOOGLE_CLIENT_SECRET",
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
|0|CX — Caverox + OR — Oráculo|🔧 Em construção|
|1|FS — Fazendinha Spotify|✅ MCP pronto|
|2|CT — Contador|🔲 Pendente|
|3|SM — Social Media|🔲 Pendente|
|4|IT — Inteligência|🔲 Pendente|
|5|SM_MASTER + AG + BKP|🔲 Pendente|
|6|WM + CC + PR|🔲 Pendente|

---

## 🏰 CX — Caverox (FASE 0 — GUARDA-CHUVA)

> Nó raiz do projeto. Pai de todos os agentes.

### OR — Oráculo

> Infraestrutura, conhecimento e controle do sistema.

#### ENG — Engenheiro

- Instala, configura e documenta toda a infraestrutura
- Guarda o "caminho feliz" de cada MCP e os erros encontrados
- Pode rodar sem IA — script puro que qualquer técnico executa
- ✅ Desktop Commander + Claude
- 🧑 OAuth e autorizações externas requerem ação humana

#### PRF — Professor

- Manual vivo do sistema em linguagem de negócio
- Apresenta organograma, explica cada robô, quando usar e o que entrega
- ✅ Agente de prompt puro

#### GP — Gestor de Parâmetros

- Painel de controle central — prompts, credenciais, limites, preferências
- Permite editar e versionar configurações sem mexer em código
- ✅ Desktop Commander + arquivos JSON dos agentes

#### RL — Relógio e Agendador

- Define quando cada robô age e registra execuções
- ⚠️ Tecnologia a definir — pode exigir solução além do Claude Desktop
- 📋 Tem item próprio: CTRL-M (lista de rotina diária) — a refinar

### BKPT — Backup Técnico

- Guarda todas as especificações técnicas do projeto
- Versiona configs, JSONs, credenciais e documentação
- ✅ Desktop Commander + Git

### LG — Log Geral

- Registro central de eventos de todos os agentes
- Consolida o que rodou, quando, resultado e erros
- ✅ Desktop Commander + arquivos de log

---

## 🎵 FS — Fazendinha Spotify (FASE 1)

> Ouve playlist, mostra calendário, gera evidências, registra execuções.

### Fluxo de operação

1. Mostrar calendário → escolher semana
2. Definir título: `Dennis Cyberpunch + Dia X até Dia Y`
3. Tocar playlist
4. Registrar músicas ouvidas (número + nome)
5. Tirar evidências (screenshot)
6. Salvar no Drive

### FS_Tocador

- Toca a playlist informada, guarda número e nome de cada música
- ✅ MCP: `Spotify MCP`
- Playlists salvas em: `FS_Tocador - Tocador\memory.json`

### FS_Evidencia

- Tira screenshot da execução no Spotify
- Salva em `/Drive/Evidencias/Spotify/`
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

### CT_Nota

- Lê notas fiscais e extratos bancários, classifica e insere na planilha
- ⚠️ PART: `Google Drive MCP` + Claude

---

## 📱 SM — Social Media (FASE 3)

### SM_Redator

- Criação de copy, legendas, roteiros
- Técnicas: AIDA, PAS, storytelling de venda
- ✅ Agente de prompt puro

### SM_Designer

- Geração de artes e layouts visuais
- ⚠️ PART: `Ideogram MCP` ou `Replicate MCP` / alternativa local: ComfyUI

### SM_Video

- Corte, montagem, edição
- ❌ OUT: FFmpeg via Claude Code

### SM_Foto

- Retoque e ajustes de imagem
- ❌ OUT: ImageMagick ou Python Pillow

### SM_Calendario

- Planeja calendário de postagens, cruza com Agenda da banda
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

### IT_Alerta

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

### BKP — Backup Burocrático

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
|1|Spotify MCP|FS_Tocador, CC ✅ instalado|
|2|Google Drive MCP|BKP, CT_Contrato, FS_Evidencia|
|3|Google Sheets MCP|CT_Planilha, IT_Planilha, IT_Alerta, PR|
|4|Google Calendar|AG, SM_Calendario, IT_Alerta|
|5|Web Search MCP|SM_Redator (SEO), IT_Spy, CC|
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
- **RL — Relógio e Agendador**: pode exigir tecnologia além do Claude Desktop — a definir.

---

## ✅ Próximos passos

1. **Interface do usuário — robô Caverox** — construir o ponto de entrada central do sistema, onde o usuário interage com todos os agentes a partir de um único painel
2. **Instalação dos próximos MCPs** — autenticar Google (Drive, Sheets, Calendar, Gmail) e instalar Brave Search, WordPress e Apify na ordem de prioridade da tabela acima
3. **Política de backup automático** — definir regras do BKPT (pastas monitoradas, tipos de arquivo, frequência) e implementar rotina de backup das especificações técnicas e configs do projeto