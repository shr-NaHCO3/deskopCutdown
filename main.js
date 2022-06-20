
// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 200,
    frame: false,
    type: 'toolbar',
    alwaysOnTop: false,
    webPreferences: {
      preload: path.join(__dirname, 'pre.js')
    },
    transparent: true,
  })

  // 加载 awa.html
  mainWindow.loadFile('awa.html')

  // 打开开发工具
  // mainWindow.webContents.openDevTools()

  ipcMain.on('down', function(){
    mainWindow.setAlwaysOnTop(false);
    dialog.showMessageBox({
      title: "完成",
      message: "已取消置顶。",
      type: "info",
    })
  })
  // ipcMain.on('up', function(){
  //   mainWindow.setAlwaysOnTop(true);
  // })
  ipcMain.on('close', function(){
    mainWindow.close();
  })
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。

app.setLoginItemSettings({
  openAtLogin: true,
})