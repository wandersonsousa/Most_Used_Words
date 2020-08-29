const {ipcMain} = require('electron')
const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', async (event, captionsFiles) => {
    

    const captionsPaths = captionsFiles.map( (caption) => caption.path )
    
    const rows = await pathsToRows( captionsPaths )
    console.log(rows)

    event.reply('process-subtitles', [
        { name: 'you', amount: 900 },
        { name:'he', amount:853},
        { name:'i', amount:1234}, 
        { name: 'hour', amount: 231 },
        { name:'clock', amount:123},
        { name:'home', amount:172},   
    ])
})