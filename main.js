const {app, BrowserWindow} = require('electron')

app.once('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600
  })

  window.setMenu(null)
  window.webContents.openDevTools()
  window.maximize()
  window.loadFile('main.html')
})

app.on('window-all-closed', () => {
  app.quit()
})