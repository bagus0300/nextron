'use strict'

const path = require('path')
const { format } = require('url')
const { app, BrowserWindow } = require('electron')
const { isDev, prepareNextRenderer } = require('nextron')

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

async function createMainWindow() {
  isDev && await prepareNextRenderer('./renderer')

  const window = new BrowserWindow()
  isDev && window.webContents.openDevTools()

  const url = isDev ? 'http://localhost:8000/home' : format({
    pathname: path.join(__dirname, '../renderer/home/index.html'),
    protocol: 'file',
    slashes: true
  })

  window.loadURL(url)

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})
