// ============================================================
// ORGANOGRAMA — dados de todos os robôs
// ============================================================
const TREE = {
  id: 'CX', icon: '🏰', label: 'CX — Caverox', badge: 'ok',
  desc: 'Guarda-chuva do projeto. Painel central que orquestra todos os agentes do Exército de Robôs da Cyberpunch.',
  path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox',
  mcps: [],
  status: 'ok',
  params: [],
  actions: [],
  children: [
    {
      id: 'OR', icon: '🔮', label: 'OR — Oráculo', badge: 'wip',
      desc: 'Responsável pela infraestrutura, conhecimento e controle do sistema. Pai dos robôs técnicos.',
      path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\OR - Oraculo',
      mcps: [], status: 'wip', params: [], actions: [],
      children: [
        {
          id: 'ENG', icon: '🔧', label: 'ENG — Engenheiro', badge: 'wip',
          desc: 'Instala, configura e documenta toda a infraestrutura. Guarda o caminho feliz de cada MCP e os erros encontrados. Pode rodar sem IA — script puro que qualquer técnico executa.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\OR - Oraculo\\ENG - Engenheiro',
          mcps: ['Desktop Commander'], status: 'wip',
          params: [
            { label: 'Pasta do projeto', value: 'C:\\Claude AI\\Cyberpunch' },
            { label: 'Repositório Git', value: 'github.com/caverox/cyberpunch' },
          ],
          actions: []
        },
        {
          id: 'PRF', icon: '📚', label: 'PRF — Professor', badge: 'pending',
          desc: 'Manual vivo do sistema em linguagem de negócio. Apresenta organograma, explica cada robô, quando usar e o que entrega. Ideal para onboarding.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\OR - Oraculo\\PRF - Professor',
          mcps: [], status: 'pending', params: [], actions: []
        },
        {
          id: 'GP', icon: '⚙️', label: 'GP — Gestor de Parâmetros', badge: 'pending',
          desc: 'Painel de controle central — prompts, credenciais, limites, preferências. Permite editar e versionar configurações sem mexer em código.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\OR - Oraculo\\GP - Gestor de Parametros',
          mcps: ['Desktop Commander'], status: 'pending', params: [], actions: []
        },
        {
          id: 'RL', icon: '⏰', label: 'RL — Relógio e Agendador', badge: 'pending',
          desc: 'Define quando cada robô age e registra execuções. Tecnologia a definir — pode exigir solução além do Claude Desktop.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\OR - Oraculo\\RL - Relogio e Agendador',
          mcps: [], status: 'pending', params: [], actions: []
        },
      ]
    },
    {
      id: 'BKPT', icon: '💾', label: 'BKPT — Backup Técnico', badge: 'pending',
      desc: 'Guarda todas as especificações técnicas do projeto. Versiona configs, JSONs, credenciais e documentação.',
      path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\BKPT - Backup Tecnico',
      mcps: ['Desktop Commander', 'Git'], status: 'pending', params: [], actions: []
    },
    {
      id: 'LG', icon: '📋', label: 'LG — Log Geral', badge: 'pending',
      desc: 'Registro central de eventos de todos os agentes. Consolida o que rodou, quando, resultado e erros.',
      path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\LG - Log Geral',
      mcps: ['Desktop Commander'], status: 'pending', params: [], actions: []
    },
    {
      id: 'SM', icon: '🤖', label: 'SM — Secretária Master', badge: 'pending',
      desc: 'Agente central orquestrador. Distribui ordens, centraliza o fluxo e gerencia todos os robôs filhos.',
      path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master',
      mcps: [], status: 'pending', params: [], actions: [],
      children: [
        {
          id: 'AG', icon: '📅', label: 'AG — Agenda', badge: 'pending',
          desc: 'Calendário de atividades da banda. Painel de entrada manual de compromissos.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\AG - Agenda',
          mcps: ['Google Calendar MCP'], status: 'pending', params: [], actions: []
        },
        {
          id: 'AW', icon: '💬', label: 'AW — Assistente WhatsApp', badge: 'out',
          desc: 'Mensagens fixas e cobranças automáticas. Sem MCP seguro disponível — risco de ban em conta pessoal. Usar número secundário.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\AW - Assistente WhatsApp',
          mcps: [], status: 'out', params: [], actions: []
        },
        {
          id: 'PR', icon: '📰', label: 'PR — Assessor de Imprensa', badge: 'pending',
          desc: 'Monta press releases e emails para festivais e curadores.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\PR - Assessor de Imprensa',
          mcps: ['Google Sheets MCP'], status: 'pending', params: [], actions: []
        },
        {
          id: 'BKP', icon: '💿', label: 'BKP — Backup Burocrático', badge: 'pending',
          desc: 'Coleta documentos de pastas locais e sobe para o Drive. Regras a definir: pastas, tipos de arquivo, frequência.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\BKP - Backup Burocratico',
          mcps: ['Desktop Commander', 'Google Drive MCP'], status: 'pending', params: [], actions: []
        },
        {
          id: 'FS', icon: '🎵', label: 'FS — Fazendinha Spotify', badge: 'ok',
          desc: 'Ouve playlist, registra execuções e gera evidências. Fase 1 — MCP autenticado e funcionando.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\FS - Fazendinha Spotify',
          mcps: ['Spotify MCP'], status: 'ok', params: [], actions: [],
          children: [
            {
              id: 'FS_TOCADOR', icon: '🎧', label: 'FS_Tocador', badge: 'ok',
              desc: 'Toca playlists e registra músicas ouvidas. Opera sem tokens — chama a API do Spotify diretamente.',
              path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\FS - Fazendinha Spotify\\FS_Tocador - Tocador',
              mcps: ['Spotify MCP'], status: 'ok',
              params: [
                { label: 'SPOTIFY REVOLUTION', value: 'spotify:playlist:1kHYofTe95gaoVzBbJo2zU' },
              ],
              actions: ['spotify']
            },
            {
              id: 'FS_EVIDENCIA', icon: '📸', label: 'FS_Evidencia', badge: 'wip',
              desc: 'Tira screenshot da execução no Spotify e salva no Drive em /Evidencias/Spotify/.',
              path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\FS - Fazendinha Spotify\\FS_Evidencia - Evidencia',
              mcps: ['Desktop Commander', 'Google Drive MCP'], status: 'wip', params: [], actions: []
            },
          ]
        },
        {
          id: 'CT', icon: '💰', label: 'CT — Contador', badge: 'pending',
          desc: 'Lê contratos, gerencia planilhas financeiras e processa notas fiscais. Fase 2.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\CT - Contador',
          mcps: ['Google Drive MCP', 'Google Sheets MCP'], status: 'pending', params: [], actions: [],
          children: [
            { id: 'CT_CONTRATO', icon: '📄', label: 'CT_Contrato', badge: 'pending', desc: 'Lê contratos em PDF e lista regras, obrigações e valores.', path: '', mcps: ['Google Drive MCP'], status: 'pending', params: [], actions: [] },
            { id: 'CT_PLANILHA', icon: '📊', label: 'CT_Planilha', badge: 'pending', desc: 'Insere dados financeiros em planilhas do Google Sheets.', path: '', mcps: ['Google Sheets MCP'], status: 'pending', params: [], actions: [] },
            { id: 'CT_NOTA', icon: '🧾', label: 'CT_Nota', badge: 'pending', desc: 'Lê notas fiscais e extratos bancários, classifica e insere na planilha.', path: '', mcps: ['Google Drive MCP'], status: 'pending', params: [], actions: [] },
          ]
        },
        {
          id: 'SM_SOCIAL', icon: '📱', label: 'SM — Social Media', badge: 'pending',
          desc: 'Criação de conteúdo, design, vídeo e calendário de postagens. Fase 3.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\SM - Social Media',
          mcps: ['Web Search MCP', 'Google Calendar MCP'], status: 'pending', params: [], actions: [],
          children: [
            { id: 'SM_REDATOR', icon: '✍️', label: 'SM_Redator', badge: 'pending', desc: 'Copy, legendas e roteiros. Técnicas AIDA, PAS e storytelling. Prompt puro — zero tokens externos.', path: '', mcps: [], status: 'pending', params: [], actions: [] },
            { id: 'SM_DESIGNER', icon: '🎨', label: 'SM_Designer', badge: 'pending', desc: 'Geração de artes e layouts visuais via Ideogram MCP ou Replicate MCP.', path: '', mcps: ['Ideogram MCP'], status: 'pending', params: [], actions: [] },
            { id: 'SM_VIDEO', icon: '🎬', label: 'SM_Video', badge: 'out', desc: 'Corte e montagem via FFmpeg no Claude Code. Sem MCP — processamento local.', path: '', mcps: [], status: 'out', params: [], actions: [] },
            { id: 'SM_FOTO', icon: '📷', label: 'SM_Foto', badge: 'out', desc: 'Retoque de imagens via ImageMagick ou Python Pillow. Sem MCP — processamento local.', path: '', mcps: [], status: 'out', params: [], actions: [] },
            { id: 'SM_CALENDARIO', icon: '🗓️', label: 'SM_Calendario', badge: 'pending', desc: 'Planeja calendário de postagens do mês, cruza com Agenda da banda.', path: '', mcps: ['Google Calendar MCP'], status: 'pending', params: [], actions: [] },
          ]
        },
        {
          id: 'IT', icon: '🕵️', label: 'IT — Inteligência', badge: 'pending',
          desc: 'Monitora bandas, festivais, tendências e atualiza planilhas de inteligência. Fase 4.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\IT - Inteligencia',
          mcps: ['Web Search MCP', 'Google Sheets MCP', 'Apify MCP'], status: 'pending', params: [], actions: [],
          children: [
            { id: 'IT_PLANILHA', icon: '📊', label: 'IT_Planilha', badge: 'pending', desc: 'Inclui e extrai insumos das planilhas de inteligência.', path: '', mcps: ['Google Sheets MCP'], status: 'pending', params: [], actions: [] },
            { id: 'IT_SPY_MANUAL', icon: '🔍', label: 'IT_Spy_Manual', badge: 'pending', desc: 'Busca informações dos @ fornecidos como insumo.', path: '', mcps: ['Web Search MCP', 'Apify MCP'], status: 'pending', params: [], actions: [] },
            { id: 'IT_SPY_DESB', icon: '🌐', label: 'IT_Spy_Desbravador', badge: 'pending', desc: 'Descobre novos perfis e notícias do setor automaticamente.', path: '', mcps: ['Web Search MCP', 'Apify MCP'], status: 'pending', params: [], actions: [] },
            { id: 'IT_SPY_ATUA', icon: '🔄', label: 'IT_Spy_Atualizacao', badge: 'pending', desc: 'Atualiza status de bandas e festivais na planilha.', path: '', mcps: ['Google Sheets MCP', 'Web Search MCP'], status: 'pending', params: [], actions: [] },
            { id: 'IT_ALERTA', icon: '🚨', label: 'IT_Alerta', badge: 'pending', desc: 'Monitora prazos de inscrição em festivais e dispara alerta antes do prazo.', path: '', mcps: ['Google Calendar MCP', 'Google Sheets MCP'], status: 'pending', params: [], actions: [] },
          ]
        },
        {
          id: 'WM', icon: '🌐', label: 'WM — Webmaster', badge: 'pending',
          desc: 'Publica e edita conteúdo no site da banda no WordPress. Fase 6.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\WM - Webmaster',
          mcps: ['WordPress MCP'], status: 'pending', params: [], actions: []
        },
        {
          id: 'CC', icon: '🎼', label: 'CC — Compositor Comercial', badge: 'pending',
          desc: 'Monitora tendências sonoras e visuais para inspiração criativa. Fase 6.',
          path: 'C:\\Claude AI\\Cyberpunch\\agents\\CX - Caverox\\SM - Secretaria Master\\CC - Compositor Comercial',
          mcps: ['Web Search MCP', 'Spotify MCP'], status: 'pending', params: [], actions: []
        },
      ]
    },
  ]
};

// ============================================================
// RENDER TREE
// ============================================================
let selectedId = null;

function badgeClass(b) {
  if (b === 'ok') return 'badge-ok';
  if (b === 'wip') return 'badge-wip';
  if (b === 'out') return 'badge-pending';
  return 'badge-pending';
}
function badgeLabel(b) {
  if (b === 'ok') return '✓ Ativo';
  if (b === 'wip') return 'Em andamento';
  if (b === 'out') return 'OUT';
  return 'Pendente';
}
function pillClass(s) {
  if (s === 'ok') return 'pill-ok';
  if (s === 'wip') return 'pill-wip';
  if (s === 'out') return 'pill-out';
  return 'pill-pending';
}
function pillLabel(s) {
  if (s === 'ok') return '✓ Ativo';
  if (s === 'wip') return '⚙ Em andamento';
  if (s === 'out') return '✗ Sem MCP';
  return '○ Pendente';
}

function renderNode(node, depth) {
  const hasChildren = node.children && node.children.length > 0;
  const div = document.createElement('div');
  div.className = 'tree-node';

  const row = document.createElement('div');
  row.className = 'tree-row';
  row.style.paddingLeft = (10 + depth * 16) + 'px';
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

  const badge = document.createElement('span');
  badge.className = 'tree-badge ' + badgeClass(node.badge);
  badge.textContent = badgeLabel(node.badge);

  row.appendChild(toggle);
  row.appendChild(icon);
  row.appendChild(label);
  row.appendChild(badge);
  div.appendChild(row);

  if (hasChildren) {
    const children = document.createElement('div');
    children.className = 'tree-children collapsed';
    node.children.forEach(c => children.appendChild(renderNode(c, depth + 1)));
    div.appendChild(children);

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !children.classList.contains('collapsed');
      children.classList.toggle('collapsed', open);
      toggle.classList.toggle('open', !open);
    });
  }

  row.addEventListener('click', () => {
    // abre filhos ao clicar na row também
    if (hasChildren) {
      const children = div.querySelector('.tree-children');
      const open = !children.classList.contains('collapsed');
      children.classList.toggle('collapsed', open);
      toggle.classList.toggle('open', !open);
    }
    selectNode(node);
  });

  return div;
}

function selectNode(node) {
  selectedId = node.id;
  document.querySelectorAll('.tree-row').forEach(r => r.classList.remove('selected'));
  const row = document.querySelector(`.tree-row[data-id="${node.id}"]`);
  if (row) row.classList.add('selected');
  renderDetail(node);
}

// ============================================================
// RENDER DETAIL
// ============================================================
function renderDetail(node) {
  const detail = document.getElementById('detail');

  const statusLabel = pillLabel(node.status);
  const statusCls = pillClass(node.status);

  const mcpHtml = node.mcps && node.mcps.length > 0
    ? node.mcps.map(m => `<span class="mcp-tag">${m}</span>`).join('')
    : '<span style="color:#444;font-size:12px">Nenhum MCP necessário</span>';

  const paramsHtml = node.params && node.params.length > 0
    ? node.params.map(p => `
        <div class="param-row">
          <span class="param-label">${p.label}</span>
          <span class="param-value">${p.value}</span>
          <span class="param-edit">✏ editar</span>
        </div>`).join('')
    : '<p class="params-empty">Nenhum parâmetro configurado ainda.</p>';

  const pathHtml = node.path
    ? `<div class="d-path">📁 ${node.path}</div>`
    : '';

  const actionsHtml = node.actions && node.actions.includes('spotify')
    ? renderSpotifyActions()
    : '';

  detail.innerHTML = `
    <div class="detail-header">
      <div class="d-icon">${node.icon}</div>
      <h1>${node.label}</h1>
      ${pathHtml}
      <div class="d-desc">${node.desc}</div>
    </div>

    <div class="detail-section">
      <h2>Status</h2>
      <div class="status-row">
        <span class="status-pill ${statusCls}">${statusLabel}</span>
      </div>
    </div>

    <div class="detail-section">
      <h2>MCPs utilizados</h2>
      <div class="mcp-list">${mcpHtml}</div>
    </div>

    <div class="detail-section">
      <h2>Parâmetros</h2>
      <div class="params-box">${paramsHtml}</div>
    </div>

    ${actionsHtml}
  `;
}

function renderSpotifyActions() {
  return `
    <div class="detail-section">
      <h2>Ações</h2>
      <div class="btn-row">
        <button class="btn btn-primary" onclick="spotifyAction('play-revolution')">▶ SPOTIFY REVOLUTION</button>
        <button class="btn btn-secondary" onclick="spotifyAction('pause')">⏸ Pausar</button>
        <button class="btn btn-secondary" onclick="spotifyAction('next')">⏭ Próxima</button>
        <button class="btn btn-secondary" onclick="spotifyAction('previous')">⏮ Anterior</button>
        <button class="btn btn-secondary" onclick="spotifyAction('status')">🔄 Status</button>
      </div>
      <div class="now-playing" id="now-playing" style="display:none">
        <div class="np-label">Tocando agora</div>
        <div class="np-track" id="np-track">—</div>
        <div class="np-artist" id="np-artist"></div>
      </div>
      <div class="log-box" id="spotify-log">Aguardando ação...</div>
    </div>
  `;
}

// ============================================================
// SPOTIFY ACTIONS
// ============================================================
async function spotifyAction(action) {
  const log = document.getElementById('spotify-log');
  if (!log) return;
  log.textContent = 'Executando...';
  try {
    const result = await window.caverox.runModule('fs_tocador', action, {});
    if (result && result.error) { log.textContent = '❌ ' + result.error; return; }
    if (result && result.track) {
      document.getElementById('now-playing').style.display = 'block';
      document.getElementById('np-track').textContent = result.track;
      document.getElementById('np-artist').textContent = result.artist || '';
    }
    log.textContent = '✅ ' + (result && result.message ? result.message : 'Concluído');
  } catch (err) {
    log.textContent = '❌ ' + err.message;
  }
}

// ============================================================
// INIT
// ============================================================
const sidebar = document.getElementById('sidebar');
sidebar.appendChild(renderNode(TREE, 0));

// Abre o nó raiz automaticamente
const rootToggle = sidebar.querySelector('.tree-toggle');
if (rootToggle) rootToggle.click();
