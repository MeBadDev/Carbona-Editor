import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
const filesAPI = {
  
    openFolder: () => {
      const result = ipcRenderer.invoke('dialog:openFolder')
      return result
    },
    readFile: (filePath) => {
      const result = ipcRenderer.invoke('dialog:openFile', filePath)
      return result
    }
  
}

contextBridge.exposeInMainWorld('filesAPI', filesAPI)