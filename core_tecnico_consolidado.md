# 📋 Consolidado — Core Técnico de Todos os Agentes

> Este arquivo agrega os core técnicos de todos os robôs do projeto Cyberpunch.
> Atualizado pelo Engenheiro sempre que um novo agente for instalado ou alterado.
> Última atualização: 2026-05-01

---

## Índice

| Agente | Arquivo | Status |
|---|---|---|
| 🏰 CX — Caverox | `caverox/core_tecnico_caverox.md` | ✅ Documentado |
| 🎵 FS — Fazendinha Spotify | `Core Técnico Bot_Spotify.md` | ✅ Documentado |
| 💰 CT — Contador | — | 🔲 Pendente |
| 📱 SM — Social Media | — | 🔲 Pendente |
| 🕵️ IT — Inteligência | — | 🔲 Pendente |
| 🤖 SM_MASTER — Secretária Master | — | 🔲 Pendente |
| 🌐 WM — Webmaster | — | 🔲 Pendente |
| 🎼 CC — Compositor Comercial | — | 🔲 Pendente |

---

## Infraestrutura base (comum a todos os agentes)

### Ambiente
- Windows 11
- Node.js v24.15.0 — `C:\Program Files\nodejs`
- npm v11.12.1
- Git v2.54.0 + GitHub
- Claude Desktop Pro
- Claude Code v2.1.126

### Caminhos importantes
| Caminho | Descrição |
|---|---|
| `C:\Claude AI\Cyberpunch\Git\cyberpunch\` | Repositório Git / Vault Obsidian |
| `C:\Claude AI\Cyberpunch\agents\` | Memória e parâmetros dos agentes |
| `C:\Claude AI\Cyberpunch\credentials\` | Credenciais OAuth |
| `%APPDATA%\Claude\claude_desktop_config.json` | Config Claude Desktop |
| `C:\Users\User\.spotify-mcp\tokens.json` | Token Spotify |

### Regra geral de execução
| Tipo de tarefa | Quem executa | Gasta tokens? |
|---|---|---|
| Ação mecânica (tocar, mover, copiar) | Script Node.js direto | ❌ Não |
| Interpretação / geração de conteúdo | Claude API | ✅ Sim |
| Instalação / configuração | Commander + Claude Code | ❌ Não |
| OAuth / login externo | Humano | ❌ Não |

---

## 🏰 CX — Caverox

> Ver detalhes completos em: `caverox/core_tecnico_caverox.md`

**Tecnologia:** Electron (app desktop Windows)
**Função:** Interface gráfica central — painel de acesso a todos os agentes
**Arquitetura:** Módulos lazy load — cada robô carrega só quando acionado
**Status:** 🔧 Em construção

---

## 🎵 FS — Fazendinha Spotify

> Ver detalhes completos em: `Core Técnico Bot_Spotify.md`

**Pacote MCP:** `@darrenjaws/spotify-mcp`
**Token salvo em:** `C:\Users\User\.spotify-mcp\tokens.json`
**Playlists salvas em:** `agents\CX - Caverox\SM - Secretaria Master\FS - Fazendinha Spotify\FS_Tocador - Tocador\memory.json`
**Status:** ✅ MCP autenticado e funcionando

### Tropeços registrados
1. Token salvo manualmente com formato `snake_case` — usar `camelCase`
2. `start chrome` corta URLs longas no Windows — salvar URL em `.txt` e colar manualmente
3. Porta 3000 em uso simultâneo — matar processo antes de rodar novo servidor
4. Usar `npx` no config — usar caminho absoluto do `node.exe`
5. Servidor MCP roda em `stdio` — não abre browser sozinho, usar `spotify_auth.js`

---

## 🔲 Demais agentes — documentação pendente

Os core técnicos dos demais agentes serão adicionados aqui pelo Engenheiro conforme cada um for instalado e configurado.
