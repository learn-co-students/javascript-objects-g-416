const playlist=Object.assign({},{artistName:"Beyonce",songTitle:"Formation"})

const updatePlaylist=function(playlist,artistName,songTitle){
    Object.assign(playlist,{ artistName: songTitle})
}