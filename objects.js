var playlist = {
  
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artistName, songTitle){
  // return Object.assign({}, playlist, {[artistName]: songTitle} )
  playlist[artistName]=songTitle;
  return playlist;
}
//
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
    return playlist
}

//
// var artistName = "Kanye";
// var songTitle="Power";
