// Navegação entre painéis
function showPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  event.currentTarget && event.currentTarget.classList.add('active');
}

// Ações do Spotify — chama módulo via IPC (zero tokens)
async function spotifyAction(action) {
  const log = document.getElementById('spotify-log');
  log.textContent = 'Executando: ' + action + '...';

  try {
    const result = await window.caverox.runModule('fs_tocador', action, {});
    if (result && result.error) {
      log.textContent = '❌ Erro: ' + result.error;
      return;
    }
    if (action === 'status' || action === 'play-revolution') {
      if (result && result.track) {
        document.getElementById('track-name').textContent = result.track;
        document.getElementById('track-artist').textContent = result.artist || '';
        log.textContent = '✅ ' + (action === 'play-revolution' ? 'Tocando SPOTIFY REVOLUTION' : 'Status atualizado');
      } else {
        log.textContent = result && result.message ? result.message : '✅ Concluído';
      }
    } else {
      log.textContent = '✅ ' + (result && result.message ? result.message : 'Concluído');
    }
  } catch (err) {
    log.textContent = '❌ ' + err.message;
  }
}
