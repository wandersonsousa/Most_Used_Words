const {ipcMain} = require('electron')

ipcMain.on('process-subtitles', (event, captionsFiles) => {
    console.log(captionsFiles)
    event.reply('process-subtitles', [
        { name: 'you', amount: 900 },
        { name:'he', amount:853},
        { name:'i', amount:1234}, 
        { name: 'hour', amount: 231 },
        { name:'clock', amount:123},
        { name:'home', amount:172},   
    ])
})