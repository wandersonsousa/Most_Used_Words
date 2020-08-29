const {ipcMain} = require('electron')

const parseData = require('./parseData')
const pathToString = require('./pathsToString')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', async (event, captionsFiles) => {
    const captionsPaths = captionsFiles.map( (caption) => caption.path )
    const captionsString =await pathToString( captionsPaths )
    const rows = await parseData( captionsString )

    captionsPlainText = rows.join(' ')

    words = captionsPlainText.split(/\s+/g)

    groupedWords = await groupWords( words )


    // const captionsPaths = captionsFiles.map( (caption) => caption.path )

    // const rows = await pathsToRows( captionsPaths )
    // const words = await prepareData(rows)
    // console.log(words)

    event.reply('process-subtitles', groupedWords)
})