# 🏰 Core Técnico — Caverox

**Data:** 2026-05-01
**Ambiente:** Windows 11, Node.js v24.15.0, Claude Code v2.1.126
**Tecnologia:** Electron (app desktop Windows)

---

## Pré-requisitos

- Node.js instalado (`node -v` para verificar)
- Claude Code instalado (`claude --version`)
- Git instalado e configurado com GitHub
- Conta Anthropic com plano Pro ou superior
- Claude Desktop instalado com MCPs configurados

---

## Caminho Feliz

### Passo 1 — Instalar Claude Code
🤖 **Commander consegue fazer**

```bash
cmd /c npm install -g @anthropic-ai/claude-code
```

Verificar: `claude --version`

### Passo 2 — Login no Claude Code
🧑 **Só humano consegue fazer**

1. Abrir PowerShell ou CMD
2. Digitar: `claude`
3. Browser abre pedindo login com conta Anthropic
4. Autorizar

### Passo 3 — Criar projeto Electron
🤖 **Claude Code consegue fazer**

```bash
cd "C:\Claude AI\Cyberpunch\Git\cyberpunch\caverox"
npm init -y
npm install electron
```

### Passo 4 — Estrutura do app
🤖 **Claude Code consegue fazer**

```
caverox/
  main.js          ← processo principal Electron
  index.html       ← interface do usuário
  renderer.js      ← lógica da interface
  modules/         ← um arquivo por robô
    fs_tocador.js
    ct_contador.js
    ...
  package.json
```

### Passo 5 — Integração com MCPs
🤖 **Commander + Claude Code conseguem fazer**

Módulos mecânicos (zero tokens) chamam APIs diretamente.
Módulos inteligentes chamam Claude API via `@anthropic-ai/sdk`.

### Passo 6 — Versionamento no GitHub
🤖 **Claude Code consegue fazer**

```bash
git add .
git commit -m "feat: estrutura inicial Caverox"
git push origin main
```

---

## ⚠️ Tropeços Conhecidos

### 1. npm bloqueado no PowerShell
**Problema:** PowerShell bloqueia scripts npm por política de execução.
**Sintoma:** `npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada`
**Solução:** Usar `cmd /c npm ...` em vez de rodar npm direto no PowerShell.

### 2. Claude Code depreciou instalação npm
**Problema:** Método `npm install -g @anthropic-ai/claude-code` está oficialmente depreciado.
**Solução:** Funciona por ora. Migrar para instalador nativo quando disponível no Windows.

---

## Arquivos Relevantes

| Arquivo | Descrição |
|---|---|
| `C:\Claude AI\Cyberpunch\Git\cyberpunch\caverox\` | Raiz do projeto Caverox |
| `C:\Claude AI\Cyberpunch\agents\CX - Caverox\` | Pasta de memória e parâmetros |
| `%APPDATA%\Claude\claude_desktop_config.json` | Config do Claude Desktop |
