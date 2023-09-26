import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
const filesAPI = {
  
    openFolder: () => {
      const result = ipcRenderer.invoke('dialog:openFolder')
      return result
    },
    readFile: () => {
      console.log('readFile')
    }
  
}

contextBridge.exposeInMainWorld('filesAPI', filesAPI)