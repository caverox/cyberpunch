const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('caverox', {
  runModule: (moduleId, action, params) =>
    ipcRenderer.invoke('run-module', moduleId, action, params)
});
