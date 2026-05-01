// ============================================================
// ORGANOGRAMA
// ============================================================
const TREE = {
  id:'CX',icon:'🪱',label:'CX — Caverox',depth:0,status:'ok',
  desc:'Guarda-chuva do projeto. Painel central que orquestra todos os agentes do Exército de Robôs da Cyberpunch.',
  path:'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox',
  mcps:[],params:[],actions:[],
  children:[
    { id:'OR',icon:'🔮',label:'OR — Oráculo',status:'wip',
      desc:'Responsável pela infraestrutura, conhecimento e controle do sistema.',
      path:'CX - Caverox\\OR - Oraculo',mcps:[],params:[],actions:[],
      children:[
        { id:'ENG',icon:'🔧',label:'ENG — Engenheiro',status:'wip',
          desc:'Instala, configura e documenta toda a infraestrutura. Guarda o caminho feliz de cada MCP e os erros encontrados. Pode rodar sem IA.',
          path:'OR - Oraculo\\ENG - Engenheiro',mcps:['Desktop Commander'],
          params:[{label:'Pasta do projeto',value:'C:\\Claude AI\\Cyberpunch'},{label:'Repositório Git',value:'github.com/caverox/cyberpunch'}],actions:[]},
        { id:'PRF',icon:'📚',label:'PRF — Professor',status:'pending',
          desc:'Manual vivo do sistema em linguagem de negócio. Apresenta organograma e explica cada robô.',
          path:'OR - Oraculo\\PRF - Professor',mcps:[],params:[],actions:[]},
        { id:'GP',icon:'⚙️',label:'GP — Gestor de Parâmetros',status:'pending',
          desc:'Painel de controle central — prompts, credenciais, limites, preferências.',
          path:'OR - Oraculo\\GP - Gestor de Parametros',mcps:['Desktop Commander'],params:[],actions:[]},
        { id:'RL',icon:'⏰',label:'RL — Relógio e Agendador',status:'pending',
          desc:'Define quando cada robô age e registra execuções. Tecnologia a definir.',
          path:'OR - Oraculo\\RL - Relogio',mcps:[],params:[],actions:[]},
      ]},
    { id:'BKPT',icon:'💾',label:'BKPT — Backup Técnico',status:'pending',
      desc:'Guarda todas as especificações técnicas do projeto. Versiona configs, JSONs e documentação.',
      path:'CX - Caverox\\BKPT - Backup Tecnico',mcps:['Desktop Commander','Git'],params:[],actions:[]},
    { id:'LG',icon:'📋',label:'LG — Log Geral',status:'pending',
      desc:'Registro central de eventos de todos os agentes.',
      path:'CX - Caverox\\LG - Log Geral',mcps:['Desktop Commander'],params:[],actions:[]},
    { id:'SM',icon:'🤖',label:'SM — Secretária Master',status:'pending',
      desc:'Agente central orquestrador. Distribui ordens e centraliza o fluxo.',
      path:'CX - Caverox\\SM - Secretaria Master',mcps:[],params:[],actions:[],
      children:[
        { id:'AG',icon:'📅',label:'AG — Agenda',status:'pending',
          desc:'Calendário de atividades da banda.',path:'SM\\AG - Agenda',mcps:['Google Calendar MCP'],params:[],actions:[]},
        { id:'AW',icon:'💬',label:'AW — Assistente WhatsApp',status:'out',
          desc:'Mensagens fixas e cobranças automáticas. Sem MCP seguro — risco de ban.',path:'SM\\AW',mcps:[],params:[],actions:[]},
        { id:'PR',icon:'📰',label:'PR — Assessor de Imprensa',status:'pending',
          desc:'Monta press releases e emails para festivais.',path:'SM\\PR',mcps:['Google Sheets MCP'],params:[],actions:[]},
        { id:'BKP',icon:'💿',label:'BKP — Backup Burocrático',status:'pending',
          desc:'Coleta documentos locais e sobe para o Drive.',path:'SM\\BKP',mcps:['Desktop Commander','Google Drive MCP'],params:[],actions:[]},
        { id:'FS',icon:'🎵',label:'FS — Fazendinha Spotify',status:'ok',
          desc:'Ouve playlist, registra execuções e gera evidências. Fase 1 — MCP ativo.',
          path:'SM\\FS - Fazendinha Spotify',mcps:['Spotify MCP'],params:[],actions:[],
          children:[
            { id:'FS_TOCADOR',icon:'🎧',label:'FS_Tocador',status:'ok',
              desc:'Toca playlists e registra músicas. Zero tokens — chama Spotify API direto.',
              path:'FS\\FS_Tocador - Tocador',mcps:['Spotify MCP'],
              params:[{label:'SPOTIFY REVOLUTION',value:'spotify:playlist:1kHYofTe95gaoVzBbJo2zU'}],
              actions:['spotify']},
            { id:'FS_EVIDENCIA',icon:'📸',label:'FS_Evidencia',status:'wip',
              desc:'Screenshot da execução no Spotify, salva em /Evidencias/Spotify/ no Drive.',
              path:'FS\\FS_Evidencia',mcps:['Desktop Commander','Google Drive MCP'],params:[],actions:[]},
          ]},
        { id:'CT',icon:'💰',label:'CT — Contador',status:'pending',
          desc:'Lê contratos, gerencia planilhas e processa notas fiscais. Fase 2.',
          path:'SM\\CT - Contador',mcps:['Google Drive MCP','Google Sheets MCP'],params:[],actions:[],
          children:[
            { id:'CT_CONTRATO',icon:'📄',label:'CT_Contrato',status:'pending',desc:'Lê PDFs e lista obrigações.',path:'CT\\CT_Contrato',mcps:['Google Drive MCP'],params:[],actions:[]},
            { id:'CT_PLANILHA',icon:'📊',label:'CT_Planilha',status:'pending',desc:'Insere dados financeiros no Sheets.',path:'CT\\CT_Planilha',mcps:['Google Sheets MCP'],params:[],actions:[]},
            { id:'CT_NOTA',icon:'🧾',label:'CT_Nota',status:'pending',desc:'Lê notas fiscais e extratos.',path:'CT\\CT_Nota',mcps:['Google Drive MCP'],params:[],actions:[]},
          ]},
        { id:'SM_SOCIAL',icon:'📱',label:'SM — Social Media',status:'pending',
          desc:'Criação de conteúdo, design, vídeo e calendário. Fase 3.',
          path:'SM\\SM - Social Media',mcps:['Web Search MCP','Google Calendar MCP'],params:[],actions:[],
          children:[
            { id:'SM_REDATOR',icon:'✍️',label:'SM_Redator',status:'pending',desc:'Copy, legendas e roteiros. AIDA, PAS, storytelling.',path:'',mcps:[],params:[],actions:[]},
            { id:'SM_DESIGNER',icon:'🎨',label:'SM_Designer',status:'pending',desc:'Geração de artes via Ideogram MCP.',path:'',mcps:['Ideogram MCP'],params:[],actions:[]},
            { id:'SM_VIDEO',icon:'🎬',label:'SM_Video',status:'out',desc:'Corte e montagem via FFmpeg no Claude Code.',path:'',mcps:[],params:[],actions:[]},
            { id:'SM_FOTO',icon:'📷',label:'SM_Foto',status:'out',desc:'Retoque via ImageMagick ou Python Pillow.',path:'',mcps:[],params:[],actions:[]},
            { id:'SM_CALENDARIO',icon:'🗓️',label:'SM_Calendario',status:'pending',desc:'Calendário de postagens cruzado com Agenda da banda.',path:'',mcps:['Google Calendar MCP'],params:[],actions:[]},
          ]},
        { id:'IT',icon:'🕵️',label:'IT — Inteligência',status:'pending',
          desc:'Monitora bandas, festivais e tendências. Fase 4.',
          path:'SM\\IT - Inteligencia',mcps:['Web Search MCP','Google Sheets MCP','Apify MCP'],params:[],actions:[],
          children:[
            { id:'IT_PLANILHA',icon:'📊',label:'IT_Planilha',status:'pending',desc:'Inclui e extrai insumos das planilhas.',path:'',mcps:['Google Sheets MCP'],params:[],actions:[]},
            { id:'IT_SPY_MANUAL',icon:'🔍',label:'IT_Spy_Manual',status:'pending',desc:'Busca perfis fornecidos como insumo.',path:'',mcps:['Web Search MCP','Apify MCP'],params:[],actions:[]},
            { id:'IT_SPY_DESB',icon:'🌐',label:'IT_Spy_Desbravador',status:'pending',desc:'Descobre novos perfis e notícias.',path:'',mcps:['Web Search MCP','Apify MCP'],params:[],actions:[]},
            { id:'IT_SPY_ATUA',icon:'🔄',label:'IT_Spy_Atualização',status:'pending',desc:'Atualiza status na planilha.',path:'',mcps:['Google Sheets MCP','Web Search MCP'],params:[],actions:[]},
            { id:'IT_ALERTA',icon:'🚨',label:'IT_Alerta',status:'pending',desc:'Monitora prazos de festivais.',path:'',mcps:['Google Calendar MCP','Google Sheets MCP'],params:[],actions:[]},
          ]},
        { id:'WM',icon:'🌐',label:'WM — Webmaster',status:'pending',desc:'Publica conteúdo no WordPress. Fase 6.',path:'SM\\WM',mcps:['WordPress MCP'],params:[],actions:[]},
        { id:'CC',icon:'🎼',label:'CC — Compositor Comercial',status:'pending',desc:'Monitora tendências sonoras. Fase 6.',path:'SM\\CC',mcps:['Web Search MCP','Spotify MCP'],params:[],actions:[]},
      ]},
  ]
};

// ============================================================
// LOG SIMULADO (últimos 5 dias)
// ============================================================
const LOG_DATA = {};
const today = new Date();
for (let d = 0; d < 5; d++) {
  const date = new Date(today);
  date.setDate(today.getDate() - d);
  const key = date.toLocaleDateString('pt-BR');
  LOG_DATA[key] = d === 0 ? [
    { time:'18:33', type:'ok',  msg:'Caverox iniciado' },
    { time:'18:33', type:'ok',  msg:'Spotify MCP conectado' },
    { time:'18:34', type:'info',msg:'FS_Tocador: play SPOTIFY REVOLUTION' },
  ] : d === 1 ? [
    { time:'09:12', type:'ok',  msg:'Caverox iniciado' },
    { time:'09:15', type:'info',msg:'FS_Tocador: status consultado' },
    { time:'09:45', type:'ok',  msg:'Git push — feat: Caverox v1.1' },
  ] : [];
}

// ============================================================
// VERSÕES
// ============================================================
const VERSIONS_MD = `# Versões e Dependências — Cyberpunch Skynet
**Última atualização:** 2026-05-01

## Sistema
| Componente | Versão | Atualizado em |
|---|---|---|
| Windows | 11 | — |
| Node.js | v24.15.0 | 2026-05-01 |
| npm | v11.12.1 | 2026-05-01 |
| Git | v2.54.0 | 2026-05-01 |
| Claude Desktop | Pro | 2026-05-01 |
| Claude Code | v2.1.126 | 2026-05-01 |
| Electron | v36.2.1 | 2026-05-01 |

## MCPs instalados
| MCP | Pacote | Status |
|---|---|---|
| Desktop Commander | @wonderwhy-er/desktop-commander | ✅ Ativo |
| Spotify | @darrenjaws/spotify-mcp | ✅ Ativo |
| Google Drive | @modelcontextprotocol/server-gdrive | 🔧 Config OK |
| Google Sheets | @modelcontextprotocol/server-gsheets | 🔧 Config OK |
| Google Calendar | @modelcontextprotocol/server-gcalendar | 🔧 Config OK |
| Gmail | @modelcontextprotocol/server-gmail | 🔧 Config OK |
| Brave Search | — | 🔲 Pendente |
| WordPress | — | 🔲 Pendente |
| Apify | — | 🔲 Pendente |`;

// ============================================================
// ÁRVORE — RENDER
// ============================================================
function renderNode(node, depth) {
  const hasChildren = node.children && node.children.length > 0;
  const div = document.createElement('div');
  div.className = 'tree-node depth-' + Math.min(depth, 4);

  const row = document.createElement('div');
  row.className = 'tree-row';
  row.dataset.id = node.id;

  const toggle = document.createElement('span');
  toggle.className = 'tree-toggle' + (hasChildren ? '' : ' leaf');
  toggle.textContent = '▶';

  const icon = document.createElement('span');
  icon.className = 'tree-icon';
  icon.textContent = node.icon;

  const label = document.createElement('span');
  label.className = 'tree-label';
  label.textContent = node.label;

  row.appendChild(toggle);
  row.appendChild(icon);
  row.appendChild(label);
  div.appendChild(row);

  if (hasChildren) {
    const children = document.createElement('div');
    children.className = 'tree-children collapsed';
    node.children.forEach(c => children.appendChild(renderNode(c, depth + 1)));
    div.appendChild(children);

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const open = !children.classList.contains('collapsed');
      children.classList.toggle('collapsed', open);
      toggle.classList.toggle('open', !open);
    });
  }

  row.addEventListener('click', () => {
    if (hasChildren) {
      const ch = div.querySelector('.tree-children');
      const open = !ch.classList.contains('collapsed');
      ch.classList.toggle('collapsed', open);
      toggle.classList.toggle('open', !open);
    }
    selectNode(node);
  });

  return div;
}

function selectNode(node) {
  document.querySelectorAll('.tree-row').forEach(r => r.classList.remove('selected'));
  const row = document.querySelector(`.tree-row[data-id="${node.id}"]`);
  if (row) row.classList.add('selected');
  renderDetail(node, 'func');
}

// ============================================================
// DETAIL PANEL
// ============================================================
function statusPill(s) {
  const map = { ok:'pill-ok', wip:'pill-wip', pending:'pill-pending', out:'pill-out' };
  const label = { ok:'✓ Ativo', wip:'⚙ Em andamento', pending:'○ Pendente', out:'✗ Sem MCP' };
  return `<span class="status-pill ${map[s]||'pill-pending'}">${label[s]||'Pendente'}</span>`;
}

function renderDetail(node, activeTab) {
  const detail = document.getElementById('detail');

  const mcpHtml = node.mcps && node.mcps.length
    ? node.mcps.map(m => `<span class="mcp-tag">${m}</span>`).join('')
    : '<span style="color:#333;font-size:12px;font-style:italic">Nenhum MCP necessário</span>';

  const paramsHtml = node.params && node.params.length
    ? '<div class="params-box">' + node.params.map(p =>
        `<div class="param-row"><span class="param-label">${p.label}</span><span class="param-value">${p.value}</span><span class="param-edit">✏</span></div>`
      ).join('') + '</div>'
    : '<p class="params-empty">Nenhum parâmetro configurado ainda.</p>';

  const actionsHtml = node.actions && node.actions.includes('spotify') ? `
    <div class="btn-row">
      <button class="btn btn-primary" onclick="spotifyAction('play-revolution')">▶ SPOTIFY REVOLUTION</button>
      <button class="btn btn-secondary" onclick="spotifyAction('pause')">⏸ Pausar</button>
      <button class="btn btn-secondary" onclick="spotifyAction('next')">⏭ Próxima</button>
      <button class="btn btn-secondary" onclick="spotifyAction('previous')">⏮ Anterior</button>
      <button class="btn btn-secondary" onclick="spotifyAction('status')">🔄 Status</button>
    </div>
    <div class="now-playing" id="now-playing">
      <div class="np-label">Tocando agora</div>
      <div class="np-track" id="np-track">—</div>
      <div class="np-artist" id="np-artist"></div>
    </div>
    <div class="log-box" id="spotify-log">Aguardando ação...</div>` : '';

  detail.innerHTML = `
    <div class="detail-top">
      <div class="detail-title-block">
        <div class="d-icon">${node.icon}</div>
        <h1>${node.label}</h1>
        ${node.path ? `<div class="d-path">📁 ${node.path}</div>` : ''}
      </div>
      <div class="eng-buttons">
        <button class="eng-btn eng-btn-func"  onclick="switchTab('func','${node.id}')">⚡ Função</button>
        <button class="eng-btn eng-btn-param" onclick="switchTab('param','${node.id}')">⚙ Parâmetros</button>
        <button class="eng-btn eng-btn-mcp"   onclick="switchTab('mcp','${node.id}')">🔌 MCPs</button>
        <button class="eng-btn eng-btn-status" onclick="switchTab('status','${node.id}')">📊 Status</button>
      </div>
    </div>

    <div class="detail-section" id="sec-func">
      <div class="section-title">Função do robô</div>
      <div class="desc-box">${node.desc}</div>
      ${actionsHtml}
    </div>

    <div class="detail-section" id="sec-param">
      <div class="section-title">Parâmetros configurados</div>
      ${paramsHtml}
    </div>

    <div class="detail-section" id="sec-mcp">
      <div class="section-title">MCPs utilizados</div>
      <div class="mcp-list">${mcpHtml}</div>
    </div>

    <div class="detail-section" id="sec-status">
      <div class="section-title">Status operacional</div>
      ${statusPill(node.status)}
      <div class="status-info">
        ${node.status === 'ok' ? 'Robô ativo e funcionando normalmente.' :
          node.status === 'wip' ? 'Em desenvolvimento — funcionalidade parcial.' :
          node.status === 'out' ? 'Sem solução MCP disponível. Usar método alternativo.' :
          'Aguardando implementação nas próximas fases do projeto.'}
      </div>
    </div>
  `;

  switchTab(activeTab || 'func', node.id);
}

function switchTab(tab, nodeId) {
  ['func','param','mcp','status'].forEach(t => {
    const sec = document.getElementById('sec-' + t);
    if (sec) sec.classList.toggle('active', t === tab);
  });
  document.querySelectorAll('.eng-btn').forEach(b => b.classList.remove('active'));
  const map = { func: 'eng-btn-func', param: 'eng-btn-param', mcp: 'eng-btn-mcp', status: 'eng-btn-status' };
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
    if (result && result.error) { log.textContent = '❌ ' + result.error; return; }
    if (result && result.track) {
      const np = document.getElementById('now-playing');
      if (np) np.style.display = 'block';
      document.getElementById('np-track').textContent = result.track;
      document.getElementById('np-artist').textContent = result.artist || '';
    }
    log.textContent = '✅ ' + (result && result.message ? result.message : 'Concluído');
  } catch (err) { log.textContent = '❌ ' + err.message; }
}

// ============================================================
// MENUS
// ============================================================
function toggleMenu(id) {
  const item = document.getElementById(id);
  const isOpen = item.classList.contains('open');
  closeMenus();
  if (!isOpen) item.classList.add('open');
}
function closeMenus() {
  document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', e => {
  if (!e.target.closest('.menu-item')) closeMenus();
});

// ============================================================
// MODALS
// ============================================================
function openModal(id) {
  closeMenus();
  document.getElementById(id).classList.add('open');
  if (id === 'modal-log') renderLog();
  if (id === 'modal-versoes') document.getElementById('modal-versoes-body').innerHTML = mdToHtml(VERSIONS_MD);
  if (id === 'modal-moc') loadMd('modal-moc-body', 'C:\\Claude AI\\Cyberpunch\\Git\\cyberpunch\\cyberpunch\\MOC_Cyberpunch_Atual.md');
  if (id === 'modal-glossario') loadMd('modal-glossario-body', 'C:\\Claude AI\\Cyberpunch\\Git\\cyberpunch\\cyberpunch\\glossario_ti.md');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

async function loadMd(targetId, filePath) {
  try {
    const result = await window.caverox.runModule('file_reader', 'read', { path: filePath });
    const el = document.getElementById(targetId);
    if (result && result.content) {
      el.innerHTML = mdToHtml(result.content);
    } else {
      el.innerHTML = '<p style="color:#444">Arquivo não encontrado: ' + filePath + '</p>';
    }
  } catch(e) {
    document.getElementById(targetId).innerHTML = '<p style="color:#444">Erro ao carregar arquivo.</p>';
  }
}

function mdToHtml(md) {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^---$/gm, '<hr>')
    .replace(/^\| (.+) \|$/gm, (_, row) => {
      const cells = row.split(' | ');
      return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/gs, m => `<table>${m}</table>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gs, m => `<ul>${m}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[huptl])/gm, '')
    .replace(/<p><\/p>/g, '');
}

function renderLog() {
  const body = document.getElementById('modal-log-body');
  const days = Object.keys(LOG_DATA);
  const tabsHtml = days.map((d, i) =>
    `<span class="log-tab${i===0?' active':''}" onclick="showLogDay('${d}', this)">${d}</span>`
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
  const html = entries.length
    ? entries.map(e => `<div class="log-entry"><span class="le-time">${e.time}</span><span class="le-${e.type}">${e.msg}</span></div>`).join('')
    : '<p style="color:#333;font-size:12px;padding:8px 0">Nenhum evento registrado neste dia.</p>';
  document.getElementById('log-entries').innerHTML = html;
}

// ============================================================
// INIT
// ============================================================
const sidebar = document.getElementById('sidebar');
sidebar.appendChild(renderNode(TREE, 0));
// Abre raiz automaticamente
const rootRow = sidebar.querySelector('.tree-row');
if (rootRow) rootRow.click();
