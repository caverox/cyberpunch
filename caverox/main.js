const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200, height: 800, minWidth: 900, minHeight: 600,
    title: 'Cyberpunch Skynet',
    backgroundColor: '#0a0a0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    show: false
  });

  mainWindow.loadFile('index.html');
  mainWindow.once('ready-to-show', () => mainWindow.show());
}

function buildMenu() {
  const template = [
    {
      label: 'Arquivo',
      submenu: [
        { label: 'Configurações', click: () => mainWindow.webContents.executeJavaScript("openModal('modal-config')") },
        { type: 'separator' },
        { label: 'Sair', role: 'quit' }
      ]
    },
    { label: 'Edit', role: 'editMenu' },
    { label: 'View', role: 'viewMenu' },
    { label: 'Window', role: 'windowMenu' },
    {
      label: 'Técnico',
      submenu: [
        { label: '📋 MOC — Especificações do Sistema', click: () => mainWindow.webContents.executeJavaScript("openModal('modal-moc')") },
        { label: '📖 Glossário de TI',                click: () => mainWindow.webContents.executeJavaScript("openModal('modal-glossario')") },
        { type: 'separator' },
        { label: '📦 Versões e Dependências',         click: () => mainWindow.webContents.executeJavaScript("openModal('modal-versoes')") },
        { label: '📋 Log do Sistema',                 click: () => mainWindow.webContents.executeJavaScript("openModal('modal-log')") },
      ]
    },
    {
      label: 'Sobre',
      submenu: [
        { label: 'Sobre o Cyberpunch Skynet', click: () => mainWindow.webContents.executeJavaScript("openModal('modal-sobre')") }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  createWindow();
  buildMenu();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

ipcMain.handle('run-module', async (event, moduleId, action, params) => {
  try {
    const mod = require(path.join(__dirname, 'modules', moduleId));
    return await mod.run(action, params);
  } catch (err) {
    return { error: err.message };
  }
});
