// ============================================================
// LOG — sistema de registro de acoes
// ============================================================
// Politica: registrar todas as acoes de execucao do sistema:
// - tocar/pausar/pular musica
// - backup executado
// - busca realizada
// - agendamento disparado
// NAO registrar: cliques de UI, abrir janelas, navegacao
// Campos: data, hora, terminal (Claude/App/Agendador), descricao
// Retencao: 5 dias visiveis na UI, demais ficam em arquivo

const LOG_FILE_PATH = 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\LG - Log Geral\\log.json';

function getToday() {
  return new Date().toLocaleDateString('pt-BR');
}
function getTime() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Carrega log do arquivo (via modulo) ou usa vazio
let LOG_DATA = {};

async function loadLog() {
  try {
    const result = await window.caverox.runModule('file_reader', 'read', { path: LOG_FILE_PATH });
    if (result && result.content) LOG_DATA = JSON.parse(result.content);
  } catch(e) { LOG_DATA = {}; }
}

async function appendLog(type, msg, terminal) {
  const day = getToday();
  if (!LOG_DATA[day]) LOG_DATA[day] = [];
  LOG_DATA[day].push({ time: getTime(), type, msg, terminal: terminal || 'App' });
  // Manter apenas 30 dias
  const keys = Object.keys(LOG_DATA).sort((a, b) => {
    const pa = a.split('/').reverse().join(''), pb = b.split('/').reverse().join('');
    return pb.localeCompare(pa);
  });
  if (keys.length > 30) keys.slice(30).forEach(k => delete LOG_DATA[k]);
  try {
    await window.caverox.runModule('file_writer', 'write', { path: LOG_FILE_PATH, content: JSON.stringify(LOG_DATA, null, 2) });
  } catch(e) { /* silencioso */ }
}

// ============================================================
// VERSOES
// ============================================================
const VERSIONS_MD = `# Versoes e Dependencias - Cyberpunch Skynet
Ultima atualizacao: 2026-05-01

## Sistema
| Componente | Versao | Atualizado em |
|---|---|---|
| Windows | 11 | - |
| Node.js | v24.15.0 | 2026-05-01 |
| npm | v11.12.1 | 2026-05-01 |
| Git | v2.54.0 | 2026-05-01 |
| Claude Desktop | Pro | 2026-05-01 |
| Claude Code | v2.1.126 | 2026-05-01 |
| Electron | v36.2.1 | 2026-05-01 |

## MCPs instalados
| MCP | Pacote | Status |
|---|---|---|
| Desktop Commander | @wonderwhy-er/desktop-commander | Ativo |
| Spotify | @darrenjaws/spotify-mcp | Ativo |
| Google Drive | @modelcontextprotocol/server-gdrive | Config OK |
| Google Sheets | @modelcontextprotocol/server-gsheets | Config OK |
| Google Calendar | @modelcontextprotocol/server-gcalendar | Config OK |
| Gmail | @modelcontextprotocol/server-gmail | Config OK |
| Brave Search | - | Pendente |
| WordPress | - | Pendente |
| Apify | - | Pendente |`;

// ============================================================
// ORGANOGRAMA — icones como texto simples (sem emoji)
// ============================================================
const TREE = {
  id:'CX', icon:'[CX]', label:'CX - Caverox', status:'ok',
  desc:'Guarda-chuva do projeto. Painel central que orquestra todos os agentes do Exercito de Robos da Cyberpunch.',
  path:'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox',
  mcps:[], params:[], actions:[],
  children:[
    { id:'OR', icon:'[OR]', label:'OR - Oraculo', status:'wip',
      desc:'Responsavel pela infraestrutura, conhecimento e controle do sistema.',
      path:'CX\\OR - Oraculo', mcps:[], params:[], actions:[],
      children:[
        { id:'ENG', icon:'[ENG]', label:'Engenheiro', status:'wip',
          desc:'Instala, configura e documenta toda a infraestrutura. Guarda o caminho feliz de cada MCP e os erros encontrados. Pode rodar sem IA — script puro.',
          path:'OR\\ENG - Engenheiro', mcps:['Desktop Commander'],
          params:[{label:'Pasta do projeto',value:'C:\\Claude AI\\Cyberpunch'},{label:'Repositorio Git',value:'github.com/caverox/cyberpunch'}], actions:[]},
        { id:'PRF', icon:'[PRF]', label:'Professor', status:'pending',
          desc:'Manual vivo do sistema em linguagem de negocio. Apresenta organograma e explica cada robo.',
          path:'OR\\PRF - Professor', mcps:[], params:[], actions:[]},
        { id:'GP', icon:'[GP]', label:'Gestor de Parametros', status:'pending',
          desc:'Painel de controle central - prompts, credenciais, limites, preferencias.',
          path:'OR\\GP - Gestor de Parametros', mcps:['Desktop Commander'], params:[], actions:[]},
        { id:'RL', icon:'[RL]', label:'Relogio e Agendador', status:'pending',
          desc:'Define quando cada robo age e registra execucoes. Tecnologia a definir.',
          path:'OR\\RL - Relogio', mcps:[], params:[], actions:[]},
      ]},
    { id:'BKPT', icon:'[BKPT]', label:'BKPT - Backup Tecnico', status:'pending',
      desc:'Guarda todas as especificacoes tecnicas do projeto. Versiona configs, JSONs e documentacao.',
      path:'CX\\BKPT - Backup Tecnico', mcps:['Desktop Commander','Git'], params:[], actions:[]},
    { id:'LG', icon:'[LG]', label:'LG - Log Geral', status:'pending',
      desc:'Registro central de eventos de todos os agentes. Registra acoes de execucao com data, hora e terminal. Nao registra navegacao de UI. Retencao: 5 dias na tela, historico completo em arquivo.',
      path:'CX\\LG - Log Geral', mcps:['Desktop Commander'], params:[], actions:[]},
    { id:'SM', icon:'[SM]', label:'SM - Secretaria Master', status:'pending',
      desc:'Agente central orquestrador. Distribui ordens e centraliza o fluxo.',
      path:'CX\\SM - Secretaria Master', mcps:[], params:[], actions:[],
      children:[
        { id:'AG', icon:'[AG]', label:'AG - Agenda', status:'pending',
          desc:'Calendario de atividades da banda.',
          path:'SM\\AG - Agenda', mcps:['Google Calendar MCP'], params:[], actions:[]},
        { id:'AW', icon:'[AW]', label:'AW - Assistente WhatsApp', status:'out',
          desc:'Mensagens fixas e cobrancas automaticas. Sem MCP seguro - risco de ban.',
          path:'SM\\AW', mcps:[], params:[], actions:[]},
        { id:'PR', icon:'[PR]', label:'PR - Assessor de Imprensa', status:'pending',
          desc:'Monta press releases e emails para festivais.',
          path:'SM\\PR', mcps:['Google Sheets MCP'], params:[], actions:[]},
        { id:'BKP', icon:'[BKP]', label:'BKP - Backup Burocratico', status:'pending',
          desc:'Coleta documentos locais e sobe para o Drive.',
          path:'SM\\BKP', mcps:['Desktop Commander','Google Drive MCP'], params:[], actions:[]},
        { id:'FS', icon:'[FS]', label:'FS - Fazendinha Spotify', status:'ok',
          desc:'Ouve playlist, registra execucoes e gera evidencias. Fase 1 - MCP ativo.',
          path:'SM\\FS - Fazendinha Spotify', mcps:['Spotify MCP'], params:[], actions:[],
          children:[
            { id:'FS_TOCADOR', icon:'[FST]', label:'FS_Tocador', status:'ok',
              desc:'Toca playlists e registra musicas. Zero tokens - chama Spotify API direto.',
              path:'FS\\FS_Tocador', mcps:['Spotify MCP'],
              params:[{label:'SPOTIFY REVOLUTION',value:'spotify:playlist:1kHYofTe95gaoVzBbJo2zU'}],
              actions:['spotify']},
            { id:'FS_EVIDENCIA', icon:'[FSE]', label:'FS_Evidencia', status:'wip',
              desc:'Screenshot da execucao no Spotify, salva em /Evidencias/Spotify/ no Drive.',
              path:'FS\\FS_Evidencia', mcps:['Desktop Commander','Google Drive MCP'], params:[], actions:[]},
          ]},
        { id:'CT', icon:'[CT]', label:'CT - Contador', status:'pending',
          desc:'Le contratos, gerencia planilhas e processa notas fiscais. Fase 2.',
          path:'SM\\CT - Contador', mcps:['Google Drive MCP','Google Sheets MCP'], params:[], actions:[],
          children:[
            { id:'CT_CONTRATO', icon:'[CTC]', label:'CT_Contrato', status:'pending', desc:'Le PDFs e lista obrigacoes.', path:'CT\\CT_Contrato', mcps:['Google Drive MCP'], params:[], actions:[]},
            { id:'CT_PLANILHA', icon:'[CTP]', label:'CT_Planilha', status:'pending', desc:'Insere dados financeiros no Sheets.', path:'CT\\CT_Planilha', mcps:['Google Sheets MCP'], params:[], actions:[]},
            { id:'CT_NOTA', icon:'[CTN]', label:'CT_Nota', status:'pending', desc:'Le notas fiscais e extratos bancarios.', path:'CT\\CT_Nota', mcps:['Google Drive MCP'], params:[], actions:[]},
          ]},
        { id:'SM_SOCIAL', icon:'[SM]', label:'SM - Social Media', status:'pending',
          desc:'Criacao de conteudo, design, video e calendario. Fase 3.',
          path:'SM\\SM - Social Media', mcps:['Web Search MCP','Google Calendar MCP'], params:[], actions:[],
          children:[
            { id:'SM_REDATOR', icon:'[SMR]', label:'SM_Redator', status:'pending', desc:'Copy, legendas e roteiros. AIDA, PAS, storytelling.', path:'', mcps:[], params:[], actions:[]},
            { id:'SM_DESIGNER', icon:'[SMD]', label:'SM_Designer', status:'pending', desc:'Geracao de artes via Ideogram MCP.', path:'', mcps:['Ideogram MCP'], params:[], actions:[]},
            { id:'SM_VIDEO', icon:'[SMV]', label:'SM_Video', status:'out', desc:'Corte e montagem via FFmpeg no Claude Code.', path:'', mcps:[], params:[], actions:[]},
            { id:'SM_FOTO', icon:'[SMF]', label:'SM_Foto', status:'out', desc:'Retoque via ImageMagick ou Python Pillow.', path:'', mcps:[], params:[], actions:[]},
            { id:'SM_CALENDARIO', icon:'[SMC]', label:'SM_Calendario', status:'pending', desc:'Calendario de postagens cruzado com Agenda da banda.', path:'', mcps:['Google Calendar MCP'], params:[], actions:[]},
          ]},
        { id:'IT', icon:'[IT]', label:'IT - Inteligencia', status:'pending',
          desc:'Monitora bandas, festivais e tendencias. Fase 4.',
          path:'SM\\IT - Inteligencia', mcps:['Web Search MCP','Google Sheets MCP','Apify MCP'], params:[], actions:[],
          children:[
            { id:'IT_PLANILHA', icon:'[ITP]', label:'IT_Planilha', status:'pending', desc:'Inclui e extrai insumos das planilhas.', path:'', mcps:['Google Sheets MCP'], params:[], actions:[]},
            { id:'IT_SPY_MANUAL', icon:'[ITM]', label:'IT_Spy_Manual', status:'pending', desc:'Busca perfis fornecidos como insumo.', path:'', mcps:['Web Search MCP','Apify MCP'], params:[], actions:[]},
            { id:'IT_SPY_DESB', icon:'[ITD]', label:'IT_Spy_Desbravador', status:'pending', desc:'Descobre novos perfis e noticias.', path:'', mcps:['Web Search MCP','Apify MCP'], params:[], actions:[]},
            { id:'IT_SPY_ATUA', icon:'[ITA]', label:'IT_Spy_Atualizacao', status:'pending', desc:'Atualiza status na planilha.', path:'', mcps:['Google Sheets MCP','Web Search MCP'], params:[], actions:[]},
            { id:'IT_ALERTA', icon:'[ITA]', label:'IT_Alerta', status:'pending', desc:'Monitora prazos de festivais.', path:'', mcps:['Google Calendar MCP','Google Sheets MCP'], params:[], actions:[]},
          ]},
        { id:'WM', icon:'[WM]', label:'WM - Webmaster', status:'pending', desc:'Publica conteudo no WordPress. Fase 6.', path:'SM\\WM', mcps:['WordPress MCP'], params:[], actions:[]},
        { id:'CC', icon:'[CC]', label:'CC - Compositor Comercial', status:'pending', desc:'Monitora tendencias sonoras. Fase 6.', path:'SM\\CC', mcps:['Web Search MCP','Spotify MCP'], params:[], actions:[]},
      ]},
  ]
};


// ============================================================
// ARVORE
// ============================================================
function renderNode(node, depth) {
  const hasChildren = node.children && node.children.length > 0;
  const wrap = document.createElement('div');
  wrap.className = 'tree-node depth-' + Math.min(depth, 4);

  const row = document.createElement('div');
  row.className = 'tree-row';
  row.dataset.id = node.id;

  const toggle = document.createElement('span');
  toggle.className = 'tree-toggle' + (hasChildren ? '' : ' leaf');
  toggle.textContent = '>';

  const tag = document.createElement('span');
  tag.className = 'tree-tag';
  tag.textContent = node.icon;

  const lbl = document.createElement('span');
  lbl.className = 'tree-label';
  lbl.textContent = node.label;

  const dot = document.createElement('span');
  dot.className = 'tree-status-dot status-' + node.status;

  row.appendChild(toggle);
  row.appendChild(tag);
  row.appendChild(lbl);
  row.appendChild(dot);
  wrap.appendChild(row);

  if (hasChildren) {
    const ch = document.createElement('div');
    ch.className = 'tree-children collapsed';
    node.children.forEach(c => ch.appendChild(renderNode(c, depth + 1)));
    wrap.appendChild(ch);

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const open = !ch.classList.contains('collapsed');
      ch.classList.toggle('collapsed', open);
      toggle.classList.toggle('open', !open);
    });
  }

  row.addEventListener('click', () => {
    if (hasChildren) {
      const ch = wrap.querySelector('.tree-children');
      if (ch) {
        const open = !ch.classList.contains('collapsed');
        ch.classList.toggle('collapsed', open);
        toggle.classList.toggle('open', !open);
      }
    }
    document.querySelectorAll('.tree-row').forEach(r => r.classList.remove('selected'));
    row.classList.add('selected');
    renderDetail(node);
  });

  return wrap;
}

// ============================================================
// DETAIL
// ============================================================
function statusPill(s) {
  const cls = { ok:'pill-ok', wip:'pill-wip', pending:'pill-pending', out:'pill-out' };
  const lbl = { ok:'Ativo', wip:'Em andamento', pending:'Pendente', out:'Sem MCP' };
  return `<span class="status-pill ${cls[s]||'pill-pending'}">${lbl[s]||'Pendente'}</span>`;
}

function renderDetail(node) {
  const detail = document.getElementById('detail');

  const mcpHtml = node.mcps && node.mcps.length
    ? node.mcps.map(m => `<span class="mcp-tag">${m}</span>`).join('')
    : '<span class="mcp-none">Nenhum MCP necessario</span>';

  const paramsHtml = node.params && node.params.length
    ? '<div class="params-box">' + node.params.map(p =>
        `<div class="param-row"><span class="param-label">${p.label}</span><span class="param-value">${p.value}</span><span class="param-edit" title="Editar">...</span></div>`
      ).join('') + '</div>'
    : '<p class="params-empty">Nenhum parametro configurado ainda.</p>';

  const statusInfo = {
    ok: 'Robo ativo e funcionando normalmente.',
    wip: 'Em desenvolvimento - funcionalidade parcial.',
    out: 'Sem solucao MCP disponivel. Usar metodo alternativo.',
    pending: 'Aguardando implementacao nas proximas fases.'
  };

  const actionsHtml = node.actions && node.actions.includes('spotify') ? `
    <div class="btn-row">
      <button class="btn btn-primary" onclick="spotifyAction('play-revolution')">PLAY: SPOTIFY REVOLUTION</button>
      <button class="btn btn-secondary" onclick="spotifyAction('pause')">PAUSAR</button>
      <button class="btn btn-secondary" onclick="spotifyAction('next')">PROXIMA</button>
      <button class="btn btn-secondary" onclick="spotifyAction('previous')">ANTERIOR</button>
      <button class="btn btn-secondary" onclick="spotifyAction('status')">STATUS</button>
    </div>
    <div class="now-playing" id="now-playing">
      <div class="np-label">TOCANDO AGORA</div>
      <div class="np-track" id="np-track">-</div>
      <div class="np-artist" id="np-artist"></div>
    </div>
    <div class="log-box" id="spotify-log">Aguardando acao...</div>` : '';

  detail.innerHTML = `
    <div class="detail-top">
      <div class="detail-title-block">
        <div class="d-tag">${node.icon}</div>
        <h1>${node.label}</h1>
        ${node.path ? `<div class="d-path">${node.path}</div>` : ''}
      </div>
      <div class="eng-buttons">
        <button class="eng-btn eng-btn-func"   onclick="switchTab('func')">Funcao</button>
        <button class="eng-btn eng-btn-param"  onclick="switchTab('param')">Parametros</button>
        <button class="eng-btn eng-btn-mcp"    onclick="switchTab('mcp')">MCPs</button>
        <button class="eng-btn eng-btn-status" onclick="switchTab('status')">Status</button>
      </div>
    </div>

    <div class="detail-section" id="sec-func">
      <div class="section-title">FUNCAO DO ROBO</div>
      <div class="desc-box">${node.desc}</div>
      ${actionsHtml}
    </div>

    <div class="detail-section" id="sec-param">
      <div class="section-title">PARAMETROS CONFIGURADOS</div>
      ${paramsHtml}
    </div>

    <div class="detail-section" id="sec-mcp">
      <div class="section-title">MCPs UTILIZADOS</div>
      <div class="mcp-list">${mcpHtml}</div>
    </div>

    <div class="detail-section" id="sec-status">
      <div class="section-title">STATUS OPERACIONAL</div>
      ${statusPill(node.status)}
      <div class="status-info">${statusInfo[node.status] || statusInfo.pending}</div>
    </div>
  `;

  switchTab('func');
}

function switchTab(tab) {
  ['func','param','mcp','status'].forEach(t => {
    const sec = document.getElementById('sec-' + t);
    if (sec) sec.classList.toggle('active', t === tab);
  });
  document.querySelectorAll('.eng-btn').forEach(b => b.classList.remove('active'));
  const map = { func:'eng-btn-func', param:'eng-btn-param', mcp:'eng-btn-mcp', status:'eng-btn-status' };
  const btn = document.querySelector('.' + map[tab]);
  if (btn) btn.classList.add('active');
}

// ============================================================
// SPOTIFY
// ============================================================
async function spotifyAction(action) {
  const log = document.getElementById('spotify-log');
  if (!log) return;
  log.textContent = 'Executando...';
  try {
    const result = await window.caverox.runModule('fs_tocador', action, {});
    if (result && result.error) { log.textContent = 'ERRO: ' + result.error; return; }
    if (result && result.track) {
      const np = document.getElementById('now-playing');
      if (np) np.style.display = 'block';
      document.getElementById('np-track').textContent = result.track;
      document.getElementById('np-artist').textContent = result.artist || '';
    }
    const msg = result && result.message ? result.message : 'Concluido';
    log.textContent = 'OK: ' + msg;
    appendLog('ok', 'Spotify: ' + action + ' - ' + msg, 'App');
  } catch (err) {
    log.textContent = 'ERRO: ' + err.message;
    appendLog('err', 'Spotify erro: ' + err.message, 'App');
  }
}

// ============================================================
// MODALS
// ============================================================
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'flex';
  if (id === 'modal-log') renderLog();
  if (id === 'modal-versoes') document.getElementById('modal-versoes-body').innerHTML = mdToHtml(VERSIONS_MD);
  if (id === 'modal-moc') loadMd('modal-moc-body', 'C:\\Claude AI\\Cyberpunch\\Git\\cyberpunch\\cyberpunch\\MOC_Cyberpunch_Atual.md');
  if (id === 'modal-glossario') loadMd('modal-glossario-body', 'C:\\Claude AI\\Cyberpunch\\Git\\cyberpunch\\caverox\\glossario_ti.md');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// Fechar clicando fora
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.style.display = 'none'; });
  });
});

async function loadMd(targetId, filePath) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.textContent = 'Carregando...';
  try {
    const result = await window.caverox.runModule('file_reader', 'read', { path: filePath });
    if (result && result.content) {
      el.innerHTML = mdToHtml(result.content);
    } else {
      el.innerHTML = '<p style="color:#555">Arquivo nao encontrado:<br>' + filePath + '</p>';
    }
  } catch(e) {
    el.innerHTML = '<p style="color:#555">Erro ao carregar: ' + e.message + '</p>';
  }
}

function mdToHtml(md) {
  let html = md
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/^### (.+)$/gm,'<h3>$1</h3>')
    .replace(/^## (.+)$/gm,'<h2>$1</h2>')
    .replace(/^# (.+)$/gm,'<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/^---$/gm,'<hr>')
    .replace(/^- (.+)$/gm,'<li>$1</li>')
    .replace(/\n\n/g,'<br><br>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, m => `<ul>${m}</ul>`);
  return html;
}

function renderLog() {
  const body = document.getElementById('modal-log-body');
  if (!body) return;
  const days = Object.keys(LOG_DATA).sort((a,b) => {
    const pa = a.split('/').reverse().join(''), pb = b.split('/').reverse().join('');
    return pb.localeCompare(pa);
  }).slice(0, 5);

  if (!days.length) { body.innerHTML = '<p style="color:#444">Nenhum evento registrado.</p>'; return; }

  const tabsHtml = days.map((d,i) =>
    `<span class="log-tab${i===0?' active':''}" onclick="showLogDay('${d}',this)">${d}</span>`
  ).join('');

  body.innerHTML = `<div class="log-day-tabs">${tabsHtml}</div><div id="log-entries"></div>`;
  showLogDay(days[0]);
}

function showLogDay(day, tab) {
  if (tab) {
    document.querySelectorAll('.log-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }
  const entries = LOG_DATA[day] || [];
  const el = document.getElementById('log-entries');
  if (!el) return;
  el.innerHTML = entries.length
    ? entries.map(e =>
        `<div class="log-entry">
          <span class="le-time">${e.time}</span>
          <span class="le-terminal">[${e.terminal||'App'}]</span>
          <span class="le-${e.type}">${e.msg}</span>
        </div>`).join('')
    : '<p style="color:#333;font-size:12px;padding:8px 0">Nenhum evento neste dia.</p>';
}

// ============================================================
// INIT
// ============================================================
const sidebar = document.getElementById('sidebar');
sidebar.appendChild(renderNode(TREE, 0));

// Abre o CX automaticamente sem selecionar
const rootToggle = sidebar.querySelector('.tree-toggle');
if (rootToggle) {
  const ch = sidebar.querySelector('.tree-children');
  if (ch) { ch.classList.remove('collapsed'); rootToggle.classList.add('open'); }
}

loadLog();
