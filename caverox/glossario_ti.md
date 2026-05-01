# Glossario de TI - Projeto Cyberpunch Skynet

Mantido pelo Engenheiro. Atualizado sempre que um novo termo tecnico for usado.
Ultima atualizacao: 2026-05-01

---

## A

**API (Application Programming Interface)**
Canal de comunicacao entre dois sistemas. Quando o Caverox fala com o Spotify, ele usa a API do Spotify. E como um garcom: voce pede ao garcom (API), ele leva ao cozinheiro (sistema) e traz a resposta. Usada por todos os MCPs do projeto.

**Access Token**
Chave temporaria (expira em ~1h) que prova que voce autorizou um acesso. O Spotify usa access token para cada requisicao. Quando expira, e renovado automaticamente pelo refresh token.

**Agente (AI Agent)**
Programa com IA que recebe uma tarefa e a executa de forma autonoma, podendo usar ferramentas, tomar decisoes e chamar outros agentes. No Cyberpunch, cada robo e um agente especializado.

**Autenticacao / OAuth**
Processo de provar permissao para usar um servico. OAuth e o padrao moderno: em vez de dar sua senha ao app, voce autoriza no site oficial e ele recebe um token. E o fluxo do "Login com Google/Spotify".

---

## B

**Branch (Git)**
Linha paralela de desenvolvimento. O branch `main` e a versao oficial. Voce cria um branch novo para desenvolver uma feature sem quebrar o que ja funciona. Quando termina, faz merge de volta ao main.

**Build**
Processo de transformar codigo-fonte em programa executavel. "Buildar o Caverox" = gerar o instalador .exe final.

---

## C

**Callback**
Funcao ou URL chamada quando uma operacao termina. No OAuth do Spotify, apos autorizar no browser, o Spotify chama a URL de callback (`http://127.0.0.1:3000/callback`) com o codigo de autorizacao.

**CLI (Command Line Interface)**
Interface de linha de comando - voce digita texto em vez de clicar em botoes. O terminal/PowerShell e uma CLI. Claude Code roda via CLI.

**Claude Code**
Ferramenta da Anthropic que roda no terminal e age de forma autonoma no seu codigo: le arquivos, escreve, roda testes, abre PRs. Requer plano Pro ($20/mes) ou superior. Versao instalada: v2.1.126.

**Claude Desktop**
App desktop da Anthropic que integra Claude com MCPs. E onde os robos do Cyberpunch rodam. Config em: `%APPDATA%\Claude\claude_desktop_config.json`.

**Commit (Git)**
Um "save" oficial no Git com mensagem descritiva. Cada commit registra o estado dos arquivos. Voce pode voltar a qualquer commit anterior.

**Config**
Arquivo que guarda configuracoes de um sistema. No projeto: `claude_desktop_config.json` e o config principal do Claude Desktop.

**Context Window**
Quantidade maxima de texto que um modelo de IA consegue processar de uma vez. Claude Sonnet 4.6 tem 1 milhao de tokens de contexto. Quanto mais longa a conversa, mais tokens sao consumidos.

---

## D

**Deploy**
Publicar uma versao do sistema. "Fazer deploy do Caverox" = instalar a versao nova no computador de producao.

**Desktop Commander**
MCP que permite ao Claude controlar o computador: criar arquivos, rodar comandos no terminal, ler pastas. E o "braco" do Claude no Windows. Pacote: `@wonderwhy-er/desktop-commander`.

---

## E

**Electron**
Framework para criar apps desktop usando tecnologias web (HTML, CSS, JavaScript). O Claude Desktop e feito em Electron. O Caverox tambem usa Electron. Vantagem: uma base de codigo para Windows, Mac e Linux.

---

## G

**Git**
Sistema de controle de versao. Registra todo o historico de mudancas, permite voltar a versoes anteriores e colaborar. Git e o sistema local; GitHub e onde o repositorio fica na nuvem.

**GitHub**
Plataforma que hospeda repositorios Git na nuvem. Repositorio do projeto: `github.com/caverox/cyberpunch`.

---

## I

**IPC (Inter-Process Communication)**
Comunicacao entre processos diferentes. No Electron, a interface (renderer) nao pode acessar o sistema diretamente - ela usa IPC para pedir ao processo principal (main) que execute acoes no computador.

---

## J

**JSON (JavaScript Object Notation)**
Formato de arquivo para dados estruturados. Usa chaves `{}` e pares chave-valor. E o formato do `claude_desktop_config.json` e dos `memory.json` dos agentes.

---

## L

**Lazy Load (Carregamento sob demanda)**
Tecnica onde partes de um sistema so sao carregadas quando necessarias. No Caverox: o modulo do Spotify so carrega quando voce clica em FS_Tocador, economizando memoria.

**Log**
Registro cronologico de eventos do sistema. O LG (Log Geral) registra todas as acoes de execucao: tocar musica, fazer backup, disparar agendamento. Nao registra navegacao de interface.

---

## M

**Markdown (.md)**
Formato de texto simples com formatacao leve. Titulos com `#`, negrito com `**`, listas com `-`. Usado em toda a documentacao do projeto. Lido pelo Obsidian e versionado pelo Git.

**MCP (Model Context Protocol)**
Protocolo criado pela Anthropic que permite ao Claude se conectar a ferramentas externas (Spotify, Google Drive, etc). Cada MCP e um "soldado especializado". Instalados via npm e configurados no `claude_desktop_config.json`.

**Merge (Git)**
Unir dois branches. "Fazer merge" = integrar o trabalho paralelo de volta ao branch principal.

**Modulo**
Parte independente de um sistema com funcao especifica. No Caverox, cada robo e um modulo: pode ser desenvolvido, atualizado e carregado separadamente.

---

## N

**Node.js**
Ambiente de execucao JavaScript fora do browser. Os MCPs do projeto sao pacotes Node.js. Instalado em `C:\Program Files\nodejs`. Versao: v24.15.0.

**npm (Node Package Manager)**
Gerenciador de pacotes do Node.js. Usado para instalar MCPs e o proprio Electron. Versao: v11.12.1.

---

## O

**Obsidian**
App de notas que usa arquivos Markdown locais. E o "Quartel General" do projeto: onde ficam rotinas, prompts e ordens para os robos.

**OAuth**
Veja: Autenticacao / OAuth.

---

## P

**PR (Pull Request)**
Pedido formal para integrar um branch ao principal no GitHub. Permite revisar mudancas antes de aceitar. Claude Code pode abrir PRs automaticamente.

**Preload Script (Electron)**
Script que roda entre o processo principal e a interface. Expoe de forma segura apenas as funcoes necessarias para a UI, sem dar acesso total ao Node.js.

**Processo**
Programa em execucao. O servidor MCP do Spotify e um processo Node.js. `taskkill /PID` mata um processo pelo ID.

---

## R

**Refresh Token**
Chave permanente usada para gerar novos access tokens quando eles expiram. Ao contrario do access token (valido ~1h), o refresh token nao expira. Salvo em `~/.spotify-mcp/tokens.json`.

**Renderer Process (Electron)**
O processo que exibe a interface grafica no Electron. Roda em ambiente isolado (sem acesso direto ao sistema) por seguranca. Comunica com o main process via IPC.

**Repositorio (repo)**
A pasta do projeto rastreada pelo Git. Contem todo o codigo, historico e configuracoes. Localizado em `C:\Claude AI\Cyberpunch\Git\cyberpunch`.

---

## S

**Script**
Arquivo de codigo que executa uma sequencia de comandos automaticamente. `spotify_auth.js` e um script Node.js que sobe um servidor local para autenticacao OAuth.

**stdio (Standard Input/Output)**
Modo de comunicacao onde um processo recebe e envia dados via texto no terminal. Os servidores MCP rodam em modo stdio - por isso nao abrem portas de rede sozinhos.

---

## T

**Token (autenticacao)**
Chave que comprova autorizacao de acesso. Dois tipos: access token (temporario, ~1h) e refresh token (permanente). Veja tambem: Access Token, Refresh Token.

**Token (IA)**
Unidade de texto processada por modelos de linguagem. Aproximadamente 4 caracteres ou 0,75 palavras. O Claude cobra por tokens - quanto mais contexto, mais tokens consumidos.

---

## V

**Vault (Obsidian)**
A pasta raiz do Obsidian com todas as notas do projeto. Localizado em `C:\Claude AI\Cyberpunch\Git\cyberpunch`.

**Versionamento**
Pratica de registrar versoes de arquivos ao longo do tempo. O Git e o sistema de versionamento - cada mudanca fica registrada com data, autor e descricao.

---

## W

**WSL (Windows Subsystem for Linux)**
Camada que permite rodar Linux dentro do Windows. Claude Code suporta WSL mas nao e obrigatorio - instalacao nativa no Windows funciona.
