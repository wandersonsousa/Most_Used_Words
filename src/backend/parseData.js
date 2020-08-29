module.exports = captionsString => {
    return captionsString
        .trim()
        .toLowerCase()
        .split('\n')
        .map(
          e => e.replace(/<[A-z]+>|<\/[A-z]+>/gm,'') 
        )
        .map(
          e => e.replace(/([^a-z|\s])/gmi,'')
        ).filter(
          e => e.replace(/\s+/g, '') !== ''
        )
}



// module.exports = captionsString => {
//     return captionsString
//     .map( function(captionStr) {
//         return captionStr
//         .trim()
//         .split('\n')
//         .map(
//           e => e.replace(/<[A-z]+>|<\/[A-z]+>/gm,'') 
//         )
//         .map(
//           e => e.replace(/([^a-z|\s])/gmi,'') 
//         ).filter(
//           e => e.replace(/\s+/g, '') !== ''
//         ).map( e => e.split('\s') )
//     } )
    
// }