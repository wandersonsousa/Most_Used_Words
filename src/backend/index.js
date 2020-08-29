const {ipcMain} = require('electron')

const parseData = require('./parseData')
const pathToString = require('./pathsToString')
ipcMain.on('process-subtitles', async (event, captionsFiles) => {
    const captionsPaths = captionsFiles.map( (caption) => caption.path )
    const captionsString =await pathToString( captionsPaths )
    const rows = await parseData( captionsString )

    captionsPlainText = rows.join(' ')

    words = captionsPlainText.split(/\s+/g)

    console.log(words)


    // const captionsPaths = captionsFiles.map( (caption) => caption.path )

    // const rows = await pathsToRows( captionsPaths )
    // const words = await prepareData(rows)
    // console.log(words)

    event.reply('process-subtitles', [
        { name: 'you', amount: 900 },
        { name:'he', amount:853},
        { name:'i', amount:1234}, 
        { name: 'hour', amount: 231 },
        { name:'clock', amount:123},
        { name:'home', amount:172},   
    ])
})