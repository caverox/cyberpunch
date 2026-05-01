const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');

const TOKEN_FILE = path.join(os.homedir(), '.spotify-mcp', 'tokens.json');
const CLIENT_ID = '0d0205ac0bd043898eef1887e7f63350';
const CLIENT_SECRET = '073e4d2efc5f4f24a609098def3ba335';
const PLAYLIST_REVOLUTION = 'spotify:playlist:1kHYofTe95gaoVzBbJo2zU';

function getTokens() {
  return JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
}

function saveTokens(tokens) {
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));
}

async function refreshAccessToken(refreshToken) {
  return new Promise((resolve, reject) => {
    const creds = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');
    const body = 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(refreshToken);
    const req = https.request({
      hostname: 'accounts.spotify.com', path: '/api/token', method: 'POST',
      headers: { 'Authorization': 'Basic ' + creds, 'Content-Type': 'application/x-www-form-urlencoded' }
    }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function getValidToken() {
  let tokens = getTokens();
  if (Date.now() >= tokens.expiresAt - 60000) {
    const refreshed = await refreshAccessToken(tokens.refreshToken);
    tokens.accessToken = refreshed.access_token;
    tokens.expiresAt = Date.now() + refreshed.expires_in * 1000;
    saveTokens(tokens);
  }
  return tokens.accessToken;
}

async function spotifyRequest(method, endpoint, body) {
  const token = await getValidToken();
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.spotify.com', path: '/v1' + endpoint, method,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {})
      }
    }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(data ? JSON.parse(data) : {}); }
        catch { resolve({}); }
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

async function getActiveDevice() {
  const data = await spotifyRequest('GET', '/me/player/devices');
  if (!data.devices || data.devices.length === 0) return null;
  return data.devices.find(d => d.is_active) || data.devices[0];
}

module.exports = {
  async run(action) {
    try {
      switch (action) {

        case 'play-revolution': {
          const device = await getActiveDevice();
          if (!device) return { message: 'Nenhum dispositivo Spotify ativo. Abra o Spotify primeiro.' };
          await spotifyRequest('PUT', '/me/player/play', {
            context_uri: PLAYLIST_REVOLUTION,
            device_id: device.id
          });
          return { message: 'Tocando SPOTIFY REVOLUTION em ' + device.name };
        }

        case 'pause': {
          await spotifyRequest('PUT', '/me/player/pause');
          return { message: 'Pausado' };
        }

        case 'next': {
          await spotifyRequest('POST', '/me/player/next');
          return { message: 'Próxima música' };
        }

        case 'previous': {
          await spotifyRequest('POST', '/me/player/previous');
          return { message: 'Música anterior' };
        }

        case 'status': {
          const data = await spotifyRequest('GET', '/me/player/currently-playing');
          if (!data || !data.item) return { message: 'Nenhuma música tocando' };
          return {
            track: data.item.name,
            artist: data.item.artists.map(a => a.name).join(', '),
            message: 'Tocando: ' + data.item.name
          };
        }

        default:
          return { error: 'Ação desconhecida: ' + action };
      }
    } catch (err) {
      return { error: err.message };
    }
  }
};
